import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

const createStudentIntoDB = async (studentData: Student) => {
  const result = await StudentModel.create(studentData);
  return result;
};

const getStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getMaleStudentsFromDB = async () => {
  const result = await StudentModel.getMaleStudents();
  return result;
};

const getSingleStudentFromDB = async (studentId: string) => {
  const result = await StudentModel.findOne({ id: studentId });
  return result;
  // if (!result) {
  //   throw new Error(`Student with ID ${studentId} not found`);
  // }
  // return result.validateEmail()
  //   ? result
  //   : "Email is invalid !! Please update your info with a valid email address";
};

export const studentServices = {
  createStudentIntoDB,
  getStudentsFromDB,
  getSingleStudentFromDB,
  getMaleStudentsFromDB,
};
