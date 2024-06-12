import AuthController from "../../controller/auth/index.js";
import { Router } from "express";
import AuthValidator from "../../validators/auth/index.js";


const AuthRouter = Router();

AuthRouter.post('/auth/signup', AuthController.signup);
AuthRouter.post('/auth/signin', AuthValidator.signin, AuthController.signin);


export default AuthRouter;
