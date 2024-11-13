import { Schema, model } from "mongoose";
import {
  GuardianInfoTypes,
  LocalGuardian,
  Student,
  UserName,
} from "./student/student.interface";

const UserNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const GuardianSchema = new Schema<GuardianInfoTypes>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String },
  contactNo: { type: String, required: true },
  address: { type: String },
});

const studentSchema = new Schema<Student>({
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
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: { type: String },
  isActive: ["active", "blocked"],
  isDeleted: Boolean,
});

// Student model
export const StudentModel = model<Student>("Student", studentSchema);
