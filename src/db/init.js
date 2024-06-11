import UserModel from "../model/user/index.js";
import sequelize from "./config.js";

const dbSync = async() => {
    await UserModel.sync({alter: true, force: false})

}


export default dbSync;