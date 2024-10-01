import { Attendance } from "../Models/attendanceSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";


export const markAttendance = async(req,res,next)=>{
console.log(req.body);

  const {attendanceData} = req.body
  
  try{
    if(!attendanceData || !Array.isArray(attendanceData) || !attendanceData.length === 0){
       return res.status(400).json('data is missing')
      }
     
      const attendanceRecords =await Promise.all(attendanceData.map(async(record)=>{
        const {student,status} = record

        await Attendance.create({student,status})
        res.status(200).json({
          success:'true',
          attendanceRecords
        })
      }))
  }   
  catch(err)
  {
       next(err)
  }
}




export const getAttendance =async(req,res,next)=>{

  try{
      const att= await Attendance.find().populate("student","name registrationNumber grade")
      res.status(200).json(att)
  }
  catch(err){
     next(err)
  }
}