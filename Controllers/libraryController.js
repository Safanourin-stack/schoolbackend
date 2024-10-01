import { Library } from "../Models/librarySchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";


export const createLibrary = async(req,res,next)=>{
  console.log(req.body);
  
    const {title,author} = req.body
  
    try{
      if(!title || !author)
        {
         return res.status(400).json('please fill the form')
        }
        await Library.create({title,author})
        res.status(200).json('created')
    }   
    catch(err)
    {
         next(err)
    }
  }
  
  
  
  export const getLibrary =async(req,res,next)=>{
  
    try{
        const lib = await Library.find()
        res.status(200).json(lib)
    }
    catch(err){
       next(err)
    }
  }