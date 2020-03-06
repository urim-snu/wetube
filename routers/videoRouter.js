import express from "express";
import routes from "../routes";
import {
  videoDetail,
  getUpload,
  postUpload,
  getEditVideo,
  postEditVideo,
  deleteVideo
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
// 함수를 실행시켜야 파라미터를 제대로 받을 수 있다.

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
