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

const getSingleStudentFromDB = async (studentId: string) => {
  const result: any = await StudentModel.findOne({ id: studentId });
  return result.validateEmail()
    ? result
    : "Email is invalid !! Please update your info with a valid email address";
};

export const studentServices = {
  createStudentIntoDB,
  getStudentsFromDB,
  getSingleStudentFromDB,
};
