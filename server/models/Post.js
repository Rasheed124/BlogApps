const mongoose = require("mongoose");
// const {Schema, model} = mongoose;
const PostSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    category: String,
    cover: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
