import { UserStatus, Role } from "@prisma/client";
import IUser from "@types/user";
interface CreateUserDto {
  fullname: string;
  name: string;
  email: string;
  status: UserStatus;
  password: string;
  role: Role;
  constructor(user: IUser);
}
export default CreateUserDto;
