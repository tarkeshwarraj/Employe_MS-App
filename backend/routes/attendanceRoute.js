import express from 'express';
import authMiddleware from '../middleware/roleMiddleware.js'
import { getMonthlyAttendance, markAttendance } from '../controllers/attendanceController.js';

const attendanceRouter = express.Router();

//POST route for marking attendance
attendanceRouter.post('/mark',authMiddleware, markAttendance);

//GET route to get monthly attendance
attendanceRouter.get('/get/:userId/:year/:month',authMiddleware, getMonthlyAttendance);


export default attendanceRouter;