import multer from "multer";
import multers3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  accessKeyId: process.env.AWS_KEY,
  region: "ap-northeast-2"
})

const multerVideo = multer({
  storage: multers3({
    s3,
    acl: "public-read",
    bucket: "wetube/video"
  })
});

const multerAvatar = multer({
  storage: multers3({
    s3,
    acl: "public-read",
    bucket: "wetube/avatar"
  })
});

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Wetube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};


//single은 하나의 파일만 들어올 수 있다는 의미
//인자는 들어올 file의 이름

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
}

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
}