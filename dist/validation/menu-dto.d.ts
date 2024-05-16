import ICanteen from "canteen";
import IOrderDetail from "order_detail";
import ICartItem from "cart_item";
interface CreateMenuDTO {
  menu_id: number;
  canteen: ICanteen;
  canteen_id: number;
  name: string;
  slug: string;
  price: number;
  stock_amount: number;
  image_url?: string;
  order_details: IOrderDetail[];
  cart_items: ICartItem[];
  constructor(menu_id: number, canteen: ICanteen, canteen_id: number, name: string, slug: string, price: number, stock_amount: number, order_details: IOrderDetail[], cart_items: ICartItem[], image_url?: string);
}
export default CreateMenuDTO;
