import UserModel from "../model/user/index.js";
import TokenModel from "../model/auth/index.js";
import sequelize from "./config.js";

const dbSync = async() => {
    await UserModel.sync({alter: true, force: false})
    await TokenModel.sync({alter: true, force:false})

}


export default dbSync;