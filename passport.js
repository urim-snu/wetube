import passport from "passport";
import User from "./models/User";
import FacebookStrategy from "passport-facebook";
import GithubStrategy from "passport-github";
import KakaoStrategy from "passport-kakao";
import {
  githubLoginCallback,
  facebookLoginCallback,
  KakaoLoginCallback
} from "./controller/usercontroller";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: `http://localhost:4000${routes.facebookCallback}`
    },
    facebookLoginCallback
  )
);

passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.kakaoCallback}`
    },
    KakaoLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
