import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", {
        pageTitle: "Join"
    });
};

export const postJoin = async (req, res, next) => {
    console.log(req.body);

    const {
        body: {
            name,
            email,
            password,
            password2
        }
    } = req;

    if (password !== password2) {
        res.status(400); // wrong request
        res.render("join", {
            pageTitle: "Join"
        });
    } else {
        try {
            const user = await User({
                name,
                email
            })
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }

    }
};

export const getLogin = (req, res) =>
    res.render("login", {
        pageTitle: "Log In"
    });
export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
});

export const logout = (req, res) => {
    // TODOL Process Log out
    res.redirect(routes.home);
};