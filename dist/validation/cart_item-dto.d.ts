import ICart from "cart";
import IMenu from "menu";
interface CreateCartItemDTO {
  cart_item_id: number;
  cart: ICart;
  cart_id: number;
  menu: IMenu;
  menu_id: number;
  subtotal: number;
  quantity: number;
  price_per_item: number;
  constructor(cart_item_id: number, cart: ICart, cart_id: number, menu: IMenu, menu_id: number, subtotal: number, quantity: number, price_per_item: number);
}
export default CreateCartItemDTO;
