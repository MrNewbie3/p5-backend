import ICanteen from "./canteen";
import ICartItem from "./cart_item";
import IOrderDetail from "./order_detail";

interface IMenu {
  menu_id?: number;
  canteen_id: number;
  name: string;
  slug: string;
  price: number;
  stock_amount: number;
  image_url?: string;
  order_details: IOrderDetail[];
  cart_items: ICartItem[];
}

export default IMenu;
