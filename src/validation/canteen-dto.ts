import { IsInt, IsNotEmpty, IsString, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import ICanteen from "canteen";
import IUser from "../../@types/user"; // Assuming IUser is defined in a separate file
import IOrder from "../../@types/order"; // Assuming IOrder is defined in a separate file
import IMenu from "../../@types/menu"; // Assuming IMenu is defined in a separate file

class CreateCanteenDTO implements ICanteen {
  @IsInt()
  user_id: number;

  @IsInt()
  canteen_number: number;

  @IsNotEmpty()
  @IsString()
  image_url: string;

  @IsOptional()
  @IsString()
  payment_method: string | undefined;

  @IsOptional()
  @IsString()
  bank_account_number: string | undefined;

  @IsOptional()
  @IsString()
  last_seen: Date | undefined;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  orders: IOrder[];

  constructor(canteen_id: number, user_id: number, canteen_number: number, orders: IOrder[], Menu: IMenu[], image_url: string, payment_method?: string, bank_account_number?: string, last_seen?: Date) {
    this.user_id = user_id;
    this.canteen_number = canteen_number;
    this.orders = orders;
    this.image_url = image_url;
    this.payment_method = payment_method;
    this.bank_account_number = bank_account_number;
    this.last_seen = last_seen;
  }
}

export default CreateCanteenDTO;
