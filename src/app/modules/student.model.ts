import { Schema, model, connect } from "mongoose";
import { Student } from "./student/student.interface";

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  gender: { type: String },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String },
  emergencyContactNo: { type: String },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
  },
  localGuardian: {
    name: { type: String, required: true },
    occupation: { type: String },
    contactNo: { type: String, required: true },
    address: { type: String },
  },
  profileImg: { type: String },
  isActive: ["active", "blocked"],
});
