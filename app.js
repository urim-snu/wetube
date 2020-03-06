import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from "./routes";
import {
    localsMiddleware
} from "./middlewares";

const app = express();


app.use(helmet());
app.set('view engine', "pug");

app.use("/uploads", express.static("uploads"));

app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(localsMiddleware);

//Global Router
app.use(routes.home, globalRouter);
//Routers
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;


// const handleHome = (req, res) => res.send("Hello from home");
// const handleProfile = (req, res) => res.send("Hello from profile");

// app.get("/", handleHome);
// app.get("/profile", handleProfile);