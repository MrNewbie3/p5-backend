import IUser from "../../@types/user";
import ICartItem from "../../@types/cart_item";
interface CreateCartDto {
  cart_id: number;
  user: IUser;
  user_id: number;
  total: number;
  created_at: Date;
  cart_items: ICartItem[];
  constructor(cart_id: number, user: IUser, user_id: number, total: number, created_at: Date, cart_items: ICartItem[]);
}
export default CreateCartDto;
