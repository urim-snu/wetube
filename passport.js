import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import {
    githubLoginCallback
} from "./controller/usercontroller";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `http://localhost:4000${routes.githubCallback}`
}, githubLoginCallback))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());