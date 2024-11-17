import { Model } from "mongoose";

export type GuardianInfoTypes = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Student = {
  id: string;
  password: string;
  name: UserName;
  gender: "Male" | "Female";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: GuardianInfoTypes;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: "active" | "blocked";
  isDeleted: boolean;
};

// Instance method
// export interface TStudendMethods {
//   validateEmail(): boolean;
// }

// Static methods
export interface StaticMethods {
  getMaleStudents(): Promise<Student[] | null>;
}

export type TStudentModel = Model<Student, {}> & StaticMethods; // Provide TStudentMethods type in parameter
