import { IsInt, IsNotEmpty, ValidateNested, IsDate } from "class-validator";
import { Type } from "class-transformer";
import IUser from "../../@types/user";
import ICartItem from "../../@types/cart_item";

class CreateCartDto {
  @IsInt()
  cart_id: number;

  @IsNotEmpty()
  @ValidateNested()
  user: IUser;

  @IsInt()
  user_id: number;

  @IsNotEmpty()
  @IsInt()
  total: number;

  @IsDate()
  created_at: Date;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  cart_items: ICartItem[];

  constructor(cart_id: number, user: IUser, user_id: number, total: number, created_at: Date, cart_items: ICartItem[]) {
    this.cart_id = cart_id;
    this.user = user;
    this.user_id = user_id;
    this.total = total;
    this.created_at = created_at;
    this.cart_items = cart_items;
  }
}

export default CreateCartDto;
