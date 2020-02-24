export const home = (req, res) => res.render("home", {pageTitle: "Home"});
export const search = (req, res) => res.render("search", {pageTitle: "Search"});
export const videos = (req, res) => res.send("videos");
export const upload = (req, res) => res.send("upload");
export const videoDetail = (req, res) => res.send("videoDetail");
export const editVideo = (req, res) => res.send("editVideo");
export const deleteVideo = (req, res) => res.send("deleteVideo");