import { z } from "zod";

// Define schemas for nested types first
const UserNameSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
});

const GuardianSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  fatherContactNo: z.string().min(1, "Father's contact number is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
  motherContactNo: z.string().min(1, "Mother's contact number is required"),
});

const LocalGuardianSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required"),
  occupation: z.string(),
  contactNo: z.string().min(1, "Local guardian's contact number is required"),
  address: z.string(),
});

// Define the main Student schema
const zodStudentSchema = z.object({
  id: z.string(),
  password: z.string().min(1, "Password is required"),
  name: UserNameSchema,
  gender: z.enum(["Male", "Female"]),
  dateOfBirth: z.string(),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: z.string().url("Invalid URL format"),
  isActive: z.enum(["active", "blocked"]),
  isDeleted: z.boolean(),
});

// Exporting the validation schema for use in routes or other parts of the application
export { zodStudentSchema };
