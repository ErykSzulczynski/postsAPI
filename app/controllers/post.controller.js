const db = require("../models");
const Post = db.post

exports.AllPosts = (req, res) => {
    Post.find({}, function(err, Posts){
        if (err) {
            res.status(500).send({ message: err});
            return;
        }

        if (Posts) {
          res.send({Posts});
        }
      });
};

exports.IdPost = (req, res) => {
  Post.find({ _id: req.params.id }, (err, Post) => {
      if(err){
          res.status(500).send({ message: err })
          return;
      }

      if(Post){
          res.send({Post})
      }
  })
};

exports.AddPost = (req, res) => {
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        date: Date.now(),
        text: req.body.text
    });

    post.save(err => {
        if(err) {
            res.status(500).send({ message: err});
            return;
        }

        res.send({message: "Post was created successfully!"})
    });
};