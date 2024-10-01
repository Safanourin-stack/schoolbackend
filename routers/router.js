import express from "express";
import { createStudent , getAllstudents} from "../Controllers/studentController.js";
import { createEvent ,getAllEvents } from "../Controllers/eventsController.js";
import { createLibrary ,getLibrary } from "../Controllers/libraryController.js";
import { createAnnouncement,getAnnouncement } from "../Controllers/announcementController.js";
import { createAssignment,getAssignment } from "../Controllers/assignmentController.js";
import { markAttendance ,getAttendance } from "../Controllers/attendanceController.js";
import { createClass ,getAllClasses } from "../Controllers/classController.js";
import { addExam,getAllExams } from "../Controllers/examController.js";
import { createTeacher,getAllTeachers } from "../Controllers/teacherController.js";
import { studentSignIn ,teacherSignIn , adminSignIn } from "../Controllers/userController.js";
import { adminRegister } from "../Controllers/adminRegisterController.js";
const router = express.Router();

router.post('/createstudent',createStudent)
router.get('/getallstudent',getAllstudents)
router.post('/event',createEvent)
router.get('/event',getAllEvents)
router.post('/lib',createLibrary)
router.get('/lib',getLibrary)
router.post('/announce',createAnnouncement)
router.get('/announce',getAnnouncement)
router.post('/assign',createAssignment)
router.get('/assign',getAssignment)
router.post('/attend',markAttendance)
router.get('/attend',getAttendance)
router.post('/clss',createClass)
router.get('/clss',getAllClasses)
router.post('/exm',addExam)
router.get('/exm',getAllExams)
router.post('/teach',createTeacher)
router.get('/teach',getAllTeachers)
router.post('/signin',adminSignIn)
router.post('/signin',studentSignIn)
router.post('/signin',teacherSignIn)
router.post('/reg',adminRegister)

export default router