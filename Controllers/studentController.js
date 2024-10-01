import { Student } from "../Models/studentSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";


export const createStudent = async(req,res,next)=>{
console.log(req.body);

  const {name,registrationNumber,grade} = req.body

  try{
    if(!name||!registrationNumber||!grade)
      {
       return res.status(400).json('please fill the form')
      }
      else{
        await Student.create({name ,registrationNumber,grade})
        res.status(200).json('created')
      }
     
  }   
  catch(err)
  {
       next(err)
  }
}



export const getAllstudents =async(req,res,next)=>{

  try{
      const student = await Student.find()
      res.status(200).json(student)
  }
  catch(err){
     next(err)
  }
}