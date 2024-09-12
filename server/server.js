const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
const bcrypt = require("bcryptjs");
const path = require("path");

const salt = bcrypt.genSaltSync(10);
const secret = "bdcjhsvdukonjosyuwebciwbewoie";

const User = require("./models/User");
const Post = require("./models/Post");
const { dbConnection } = require("./config/db");
const { request } = require("http");

dotenv.config();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

// app.use(express.static(''))
app.use("/uploads", express.static(__dirname + "/uploads"));

// Connect to database
dbConnection();

const PORT = process.env.PORT || 4000;

app.get("/", (request, response) => {
  response.send({ msg: "hello world" });
});

app.post("/api/register", async (request, response) => {
  const { email, username, password } = request.body;
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    response.json(user);
  } catch (e) {
    response.status(400).json(e);
  }
});

app.post("/api/login", async (request, response) => {
  const { username, password } = request.body;
  const userDoc = await User.findOne({ username });

  if (!userDoc) {
    return response.status(400).json("User not found");
  }

  const isPasswordOk = bcrypt.compareSync(password, userDoc.password);

  if (isPasswordOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      response
        .cookie("token", token, {
          httpOnly: true, // Prevent access from JavaScript
          secure: process.env.NODE_ENV === "production", // Only secure in production
          sameSite: "strict", // Protect against CSRF
        })
        .status(200)
        .json({
          id: userDoc._id,
          username,
        });
    });
  } else {
    response.status(400).json("wrong credentials");
  }
});

app.get("/api/profile", (request, response) => {
  const { token } = request.cookies;

  if (!token) {
    return response.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, secret, (err, info) => {
    if (err) {
      return response.status(403).json({ error: "Invalid token" });
    }

    response.json(info);
  });
});

app.post("/api/logout", (request, response) => {
  response
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .status(200)
    .json("ok");
});

app.post(
  "/api/post",
  uploadMiddleware.single("image"),
  async (request, response) => {
    const { originalname, path } = request.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = `${path}.${ext}`;

    fs.renameSync(path, newPath);

    const { token } = request.cookies;

    if (!token) {
      return response.status(401).json({ error: "No token provided" });
    }

    jwt.verify(token, secret, async (err, info) => {
      if (err) {
        return response.status(403).json({ error: "Invalid token" });
      }

      // Get Post Doc
      const { title, author, content, category, cover } = request.body;

      const postDOc = await Post.create({
        title,
        author: info.id,
        content,
        category,
        cover: newPath,
      });

      response.json({ message: "File uploaded successfully", postDOc });
    });
  }
);

app.get("/api/post", async (request, response) => {
  response.json(
    await Post.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20)
  );
});
app.get("/api/post/:id", async (request, response) => {
  const { id } = request.params;

  const postDoc = await Post.findById(id).populate("author", ["username"]);

  // console.log(id);

  response.json(postDoc);
});

app.put(
  "/api/post",
  uploadMiddleware.single("image"),
  async (request, response) => {
    let newPath = null;

    //  response.json(request.file);

    if (request.file) {
      const { originalname, path } = request.file;
      const parts = originalname.split(".");
      const ext = parts[parts.length - 1];
      const newPath = `${path}.${ext}`;

      fs.renameSync(path, newPath);
    }

    const { token } = request.cookies;

    if (!token) {
      return response.status(401).json({ error: "No token provided" });
    }

    jwt.verify(token, secret, async (err, info) => {
      if (err) {
        return response.status(403).json({ error: "Invalid token" });
      }

      //   // Get Post Doc
      const { id, title, content, category, cover } = request.body;

      const postDOc = await Post.findById(id);

      const isAuthor =
        JSON.stringify(postDOc.author) === JSON.stringify(info.id);

      if (!isAuthor) {
        return response.status(400).json({ error: "You are not the author" });
      }

      // Update post fields
      postDOc.title = title;
      postDOc.content = content;
      postDOc.category = category;
      postDOc.cover = newPath ? newPath : postDOc.cover;

      // Save the updated post
      await postDOc.save();

      response.json(postDOc);
    });
  }
);

app.delete("/api/post/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the post" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
