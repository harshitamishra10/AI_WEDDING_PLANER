// import User from "../models/User.js";
// import bcrypt from "bcryptjs";

// // Register User
// export const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({
//         message: "User already exists",
//       });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Registration successful",
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }

import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register User
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // // Create new user
    // const user = await User.create({
    //   name,
    //   email,
    //   password: hashedPassword,
    // });
    const user = await User.create({
  name,
  email,
  password,
});

    res.status(201).json({
      success: true,
      message: "Registration successful",
      user,
    });
  } catch (error) {
  console.log("Register Error:");
    console.log(error);

     res.status(500).json({
  success: false,
    message: error.message,
     });
  }
};
// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    // Create Token
    const token = jwt.sign(
      {
        id: user._id,
      },
      "wedai_secret_key",
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};