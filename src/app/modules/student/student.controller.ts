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
      documentCount: result.length,
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
    return res.status(404).send({
      success: false,
      message: error instanceof Error && error.message,
    });
  }
};

const getMaleStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getMaleStudentsFromDB();
    return res.status(200).send({
      success: true,
      message: "Male students retrieved Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// const updateStudents = async (req: Request, res: Response) => {
//   try {
//     const result = await studentServices.getUpdatedStudentFromDB();
//   return res.status(200).send({
//     success: true,
//     message: result,
//   })
// };
//   } catch (error) {
//     return res.status(404).send({
//       success: false,
//       message: error instanceof Error && error.message,
//     });
//   }

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.deletStudentFromDB(studentId);
    return res.status(200).send({
      success: true,
      message:
        result.modifiedCount == 0
          ? "Student deleted successfully"
          : `No student found with the id: ${studentId}`,
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error instanceof Error && error.message,
    });
  }
};

export const studentController = {
  createStudent,
  getStudents,
  getSingleStudent,
  getMaleStudents,
  deleteStudent,
  // updateStudents,
};
