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
  middleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  password: string;
  name: UserName;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: {
    type: string;
    enum: {
      values: ["A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-"];
      message: "{VALUE} is not allowed";
    };
  };
  presentAddress: string;
  permanentAddress: string;
  guardian: GuardianInfoTypes;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: "active" | "blocked";
  isDeleted: boolean;
};
