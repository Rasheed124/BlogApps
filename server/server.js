const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const secret = "bdcjhsvdukonjosyuwebciwbewoie";

const User = require("./models/User");

const PORT = process.env.PORT || 4000;

dotenv.config();

const { dbConnection } = require("./config/db");

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

// Connect to database
dbConnection();

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
    // if (e.code === 11000) return response.status(400).send("Email already exists");
    // res.status(400).send(e.message);

    response.status(400).json(e);
  }
});




app.post("/api/login", async (request, response) => {
  const { username, password } = request.body;

  const userDoc = await User.findOne({ username });
  const isPasswordOk = bcrypt.compareSync(password, userDoc.password);

  if (isPasswordOk) {

    response.status(200).json("credentials ");

    // jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
    //   if (err) throw err;
    //   response.cookie("token", token).json("ok");
    // });

    // response.json("Correct password");
  } else {
    response.status(400).json("wrong credentials");
  }
});

// app.post("/api/profile", (request, response) => {
  

//   response.json(request.cookies);
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
