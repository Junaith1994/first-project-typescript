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
  occupation: z.string().optional(),
  contactNo: z.string().min(1, "Local guardian's contact number is required"),
  address: z.string().optional(),
});

// Define the main Student schema
const zodStudentSchema = z.object({
  id: z.string().optional(),
  password: z.string().min(1, "Password is required"),
  name: UserNameSchema,
  gender: z.string().optional(),
  dateOfBirth: z.string().optional(),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  contactNo: z.string().optional(),
  emergencyContactNo: z.string().optional(),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  presentAddress: z.string().optional(),
  permanentAddress: z.string().optional(),
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema.optional(),
  profileImg: z.string().url("Invalid URL format").optional(),
  isActive: z.enum(["active", "blocked"]).optional(),
  isDeleted: z.boolean().optional(),
});

// Exporting the validation schema for use in routes or other parts of the application
export { zodStudentSchema };
