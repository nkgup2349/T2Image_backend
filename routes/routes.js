import express from "express";
import {registerUser,loginUser, userCredits, paymentrazorpay, verifypaymentrazor} from "../controller/userController.js";
import userAuth from "../middlewere/auth.js";


const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credit",userAuth ,  userCredits);
userRouter.post("/payment" , userAuth ,   paymentrazorpay);
userRouter.post("/verifypayment" , verifypaymentrazor);


export default userRouter;
