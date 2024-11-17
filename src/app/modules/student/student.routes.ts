import express from "express";
import { studentController } from "./student.controller";

const router = express.Router();

router.post("/create-student", studentController.createStudent);

router.get("/", studentController.getStudents);

router.post("/:studentId", studentController.getSingleStudent);

router.get("/male-students", studentController.getMaleStudents);

export const StudentRoutes = router;
