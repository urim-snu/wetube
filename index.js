import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"

const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on: https://localhost:${PORT}`);
const handleHome = (req, res) => res.send("Hello from home");
const handleProfile = (req, res) => res.send("Hello from profile");

const prevent = (req, res, next) => {
    handleHome(req, res);
}

app.use(prevent);
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(helmet());
// app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);