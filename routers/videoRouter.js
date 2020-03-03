import express from 'express';
import routes from "../routes";
import { videoDetail, getUpload, postUpload } from '../controller/videoController';

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);


videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, (req, res) => res.send("edit video"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("delete video"));

export default videoRouter;