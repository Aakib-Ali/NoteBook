const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator"); //to use cryptography
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //import jsonwebtoken
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "Thereisnothingwithout$Allah$";
//Route 1: create a user using: POST- "/api/auth/". Dosen't require auth create user without login
router.post(
  "/createuser",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Enter valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // if theree is error return bed request
    const error = validationResult(req);
    try {
      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }

      //create secret pass by use cryptography
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);

      // create user with velidation that there is user with same email or not
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json("Emaile already exists");
      }
      //create user and this is a promiss
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      });

      //create authentication token to verify the user
      const data = {
        //take id of user from data
        user: {
          id: user.id,
        },
      };

      //jwt use
      const authToken = jwt.sign(data, JWT_SECRET);
      res.send({ authToken });
      // res.send({user});
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Error Occurs");
    }
  }
);

//Route2: Auhenticate a user using: POST- "/api/auth/login".without login
router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password can not empty").exists(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    try {
      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }
      const { email, password } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(500).json({ error: "Invalid credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);

      const data = {
        //take id of user from data
        user: {
          id: user.id,
        },
      };
      //jwt use
      const authToken = jwt.sign(data, JWT_SECRET);
      res.send({ authToken });
      // res.send({user});
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Error Occurs");
    }
  }
);

//Route3: Get user Details using: POST- "/api/auth/getuser".with login
router.post("/getuser",fetchuser, async (req, res) => {
    try{
        userId=req.user.id;
        const user=await User.findById(userId).select("-password");
        res.send(user);

    }catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Error Occurs");
    }

    });


module.exports = router;
