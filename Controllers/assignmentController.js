import { Assignment } from "../Models/assignmentSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";


export const createAssignment = async(req,res,next)=>{
console.log(req.body);

  const {title,description,grade,deadline} = req.body

  try{
    if(!title || !description || !grade||!deadline)
      {
       return res.status(400).json('please fill the form')
      }
      await Assignment.create({title,description,grade,deadline})
      res.status(200).json('created')
  }   
  catch(err)
  {
       next(err)
  }
}



export const getAssignment =async(req,res,next)=>{

  try{
      const assign = await Assignment.find()
      res.status(200).json(assign)
  }
  catch(err){
     next(err)
  }
}