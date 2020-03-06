import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {
        pageTitle: "Join"
    });
};

export const postJoin = (req, res) => {
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
        // TODO: regiter User
        // TODO: Log User in
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) =>
    res.render("login", {
        pageTitle: "Log In"
    });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};
export const logout = (req, res) => {
    // TODOL Process Log out
    res.redirect(routes.home);
};