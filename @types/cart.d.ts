import ICartItem from "./cart_item";
import ICreateUserDto from "./user";

interface ICart {
  cart_id: number;
  user: ICreateUserDto;
  user_id: number;
  total: number;
  created_at: Date;
  cart_items: ICartItem[];
}

export default ICart;
