import { handleValidationError } from "../middlewares/errorHandler.js";
import {Admin } from "../Models/adminRegisterSchema.js";
import { Student } from "../Models/userSchema.js";
import { Teacher } from "../Models/userSchema.js";

export const adminSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      handleValidationError("Please provide email and password", 400);
    }
    const existingAdmin = await Admin.findOne({ email });
           console.log(existingAdmin);
           
    if (!existingAdmin) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    else{
      res.status(200).json({
        success: true,
        message: "Admin signed in successfully",
  
      });
    }
    const isPasswordValid = await existingAdmin.isValidPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    
  } catch (err) {
    next(err);
  }
};


export const studentSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  
  try {
    if (!email || !password) {
      handleValidationError("Please provide email and password", 400);
    }
    else{
      res.status(200).json({
        success: true,
        message: "Student signed in successfully",
      });
    }
    
  } catch (err) {
    next(err);
  }
};

export const teacherSignIn = async (req, res, next) => { 
  const { email, password } = req.body;
  console.log(req.body);
  
  try {
    if (!email || !password) {
      handleValidationError("Please provide email and password", 400);
    }
   else{
    res.status(200).json({
      success: true,
      message: "Teacher signed in successfully",
    });
   }
    
  } catch (err) {
    next(err);
  }
};