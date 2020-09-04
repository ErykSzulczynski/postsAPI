const { authJwt } = require("../middlewares");
const controller = require("../controllers/post.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/content/posts", controller.AllPosts);

  app.get("/api/content/post/:id", controller.IdPost);

  app.post("/api/content/post", controller.AddPost);
};