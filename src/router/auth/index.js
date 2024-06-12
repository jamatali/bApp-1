import AuthController from "../../controller/auth/index.js";
import { Router } from "express";


const AuthRouter = Router();

AuthRouter.post('/auth/signup', AuthController.signup);
AuthRouter.post('/auth/signin', AuthController.signin);


export default AuthRouter;
