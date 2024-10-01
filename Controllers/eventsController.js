import { Events } from "../Models/eventSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";


export const createEvent = async(req,res,next)=>{
console.log(req.body);

  const {event} = req.body

  try{
    if(!event)
      {
       return res.status(400).json('please fill the form')
      }
      await Events.create({event})
      res.status(200).json('created')
  }   
  catch(err)
  {
       next(err)
  }
}



export const getAllEvents =async(req,res,next)=>{

  try{
      const events = await Events.find()
      res.status(200).json(events)
  }
  catch(err){
     next(err)
  }
}