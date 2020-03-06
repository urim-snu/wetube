import express from "express";
import routes from "../routes";
import {
  join
} from "../controller/usercontroller";

const userRouter = express.Router();

userRouter.get(routes.editProfile, (req, res) =>
  res.render("editProfile", {
    pageTitle: "Edit Profile"
  })
);
userRouter.get(routes.changePassword, (req, res) =>
  res.send("change password")
);
userRouter.get(routes.userDetail(), (req, res) => res.send("user detail"));

export default userRouter;