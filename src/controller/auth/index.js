import { compare, hash } from "bcrypt";
import UserModel from "../../model/user/index.js";
import TokenModel from "../../model/auth/index.js";
import jwt from "jsonwebtoken";

const SEC_KEY = process.env.SECRET_KEY;
const AuthController = {
  signup: async (req, res) => {
    try {
      const payload = req.body;
      const user = await UserModel.findOne({
        where: {
          email: payload.email,
        },
      });
      if (user) {
        return res
          .status(400)
          .json({ message: "User with this email already existed" });
      }
      const hashPassword = await hash(payload.password, 10);

      await UserModel.create({
        ...payload,
        password: hashPassword,
      });
      res.status(200).json({ message: "User Created Successfully" });
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error ==> ${error}` });
    }
  },

  signin: async (req, res) => {
    try {
      const payload = req.body;
      let user = await UserModel.findOne({
        where: {
          email: payload.email,
        },
      });

      if (!user) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
      user = user.toJSON();
      const checkPassword = await compare(payload.password, user.password);
      if (!checkPassword) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
      delete user.password;
      const token = jwt.sign(user, SEC_KEY, {expiresIn:"1h"});

      await TokenModel.create({
        token
      });
      res.status(200).json({ data: user, token });
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error ==> ${error}` });
    }
  },
};

export default AuthController;
