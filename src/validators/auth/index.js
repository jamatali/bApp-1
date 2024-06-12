import Joi from "joi";


const AuthValidator = {
signin: (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const { value, error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "Invalid data",
        error,
      });
    }
    next();
  },
}

export default AuthValidator;