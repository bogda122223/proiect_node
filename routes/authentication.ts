import express from "express";
import {
    deleteUser,
  getAllUsers,
  loginUser,
  logout,
  registerUser,
  updateUser,
} from "../controllers/auth";
import { validator } from "../middlewares/validateCookie";

const authRouter = express.Router();

authRouter.post("/signup", registerUser);

authRouter.post("/login", loginUser);

authRouter.get("/getAllUsers", validator, getAllUsers);

authRouter.post("/logout", logout);

authRouter.delete("/deleteUser", validator, deleteUser)

authRouter.post("/updateUser", validator, updateUser)

export default authRouter;