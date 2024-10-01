import { Announcement } from "../Models/announcementSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";


export const createAnnouncement = async(req,res,next)=>{
console.log(req.body);

  const {announcement} = req.body

  try{
    if(!announcement)
      {
       return res.status(400).json('please fill the form')
      }
      await Announcement.create({announcement})
      res.status(200).json('created')
  }   
  catch(err)
  {
       next(err)
  }
}



export const getAnnouncement =async(req,res,next)=>{

  try{
      const announce = await Announcement.find()
      res.status(200).json(announce)
  }
  catch(err){
     next(err)
  }
}