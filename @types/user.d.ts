// @types/user.d.ts

import { UserStatus, Role } from "@prisma/client"; // Adjust the path to your enums

interface IUser {
  fullname: string;
  name: string;
  email: string;
  status: UserStatus;
  password: string;
  role: Role;
  user_id: number;
  fcm_token?: string;
}

export default IUser;
