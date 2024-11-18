import { Schema, model } from "mongoose";
import {
  GuardianInfoTypes,
  LocalGuardian,
  StaticMethods,
  Student,
  TStudentModel,
  UserName,
} from "./student/student.interface";

const UserNameSchema = new Schema<UserName>(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  { _id: false }
);

const GuardianSchema = new Schema<GuardianInfoTypes>(
  {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
  },
  { _id: false }
);

const LocalGuardianSchema = new Schema<LocalGuardian>(
  {
    name: { type: String, required: true },
    occupation: { type: String },
    contactNo: { type: String, required: true },
    address: { type: String },
  },
  { _id: false }
);

const studentSchema = new Schema<Student, TStudentModel>({
  id: { type: String },
  password: { type: String, required: true },
  name: UserNameSchema,
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
  },
  isDeleted: Boolean,
});

// Instance method
// studentSchema.methods.validateEmail = function () {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (!this.email) {
//     return false;
//   } else {
//     return emailRegex.test(this.email);
//   }
// };

// Static methods
studentSchema.statics.getMaleStudents = async function () {
  return this.find({ gender: "Male" });
};

// Middleware for hiding deleted docs
studentSchema.pre("find", async function (next) {
  this.where({ isDeleted: { $ne: true } });
  next();
});

// Student model
export const StudentModel = model<Student, TStudentModel>(
  "Student",
  studentSchema
);
