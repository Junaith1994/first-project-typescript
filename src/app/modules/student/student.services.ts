import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

const createStudentIntoDB = async (studentData: Student) => {
  const result = await StudentModel.create(studentData);
  return result;
};

const getSingleStudent = (id: string) => {
  const student = new StudentModel();
  const result = student.singleStudent(id);
  return result;
};

const getStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (studentId: string) => {
  const result = await StudentModel.findOne({ id: studentId });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getStudentsFromDB,
  getSingleStudentFromDB,
  getSingleStudent,
};
