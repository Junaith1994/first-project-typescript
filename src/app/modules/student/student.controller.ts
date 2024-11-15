import { Request, Response } from "express";
import { studentServices } from "./student.services";
import { zodStudentSchema } from "./zodValidation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body.student;
    // Zod validated student data
    const validatedStudentData = zodStudentSchema.parse(studentData);
    const result =
      await studentServices.createStudentIntoDB(validatedStudentData);
    return res.status(200).send({
      success: true,
      message: "Student data created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getStudentsFromDB();
    return res.status(200).send({
      success: true,
      messsage: "Students retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentFromDB(studentId);
    return res.status(200).send({
      success: true,
      message: "Single student retrieve successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  getStudents,
  getSingleStudent,
};
