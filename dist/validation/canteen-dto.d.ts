import IUser from "../../@types/user";
import IOrder from "../../@types/order";
import IMenu from "../../@types/menu";
interface CreateCanteenDTO {
  canteen_id: number;
  user: IUser;
  user_id: number;
  canteen_number: number;
  image_url?: string;
  payment_method?: string;
  bank_account_number?: string;
  last_seen?: Date;
  orders: IOrder[];
  Menu: IMenu[];
  constructor(canteen_id: number, user: IUser, user_id: number, canteen_number: number, orders: IOrder[], Menu: IMenu[], image_url?: string, payment_method?: string, bank_account_number?: string, last_seen?: Date);
}
export default CreateCanteenDTO;
