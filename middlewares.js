import multer from "multer";
import routes from "./routes";

const multerVideo = multer({
    dest: 'uploads/videos/'
});
//서버의 폴더명
// /uploads/videos/ 이런 식으로 쓰면 컴퓨터에 root에 디렉토리를 만들게 된다.

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'Wetube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};

export const uploadVideo = multerVideo.single('videoFile');

//single은 하나의 파일만 들어올 수 있다는 의미
//인자는 들어올 file의 이름  