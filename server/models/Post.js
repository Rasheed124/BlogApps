const mongoose = require("mongoose");
// const {Schema, model} = mongoose;
const PostSchema = mongoose.Schema({
    title:String,
    summary:String,
    content:String,
    cover:String,

//   username: {
//     type: String,
//     required: true,
//     min: 4,
//     unique: true,
//   },

//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },

//   password: {
//     type: String,
//     required: true,
//   },
}, {
    timestamps: true,
});

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
