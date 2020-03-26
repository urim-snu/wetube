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
import {
  uploadVideo,
  onlyPrivate
} from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);
// 함수를 실행시켜야 파라미터를 제대로 받을 수 있다.

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;