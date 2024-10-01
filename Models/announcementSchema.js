import mongoose from "mongoose";
import validator from "validator";

const AnnouncementShema =new mongoose.Schema({
  announcement:{
    type:String,
    required:true
  },
 
})

export const Announcement = mongoose.model('Announcement',AnnouncementShema)