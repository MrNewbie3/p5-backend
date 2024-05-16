import { IsNotEmpty, IsEmail, IsEnum, IsString, IsOptional } from "class-validator";
import { UserStatus, Role } from "@prisma/client";
import IUser from "user";

class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsEnum(UserStatus)
  status: UserStatus;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEnum(Role)
  role: Role;

  @IsOptional()
  @IsString()
  fcm_token?: string;

  constructor(user: IUser) {
    this.fullname = user.fullname;
    this.name = user.name;
    this.email = user.email;
    this.status = user.status;
    this.password = "";
    this.role = Role.USER;
    this.fcm_token = user.fcm_token;
  }
}

export default CreateUserDto;
