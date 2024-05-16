import { IsInt, IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import ICart from "cart"; // Assuming ICart is defined in a separate file
import IMenu from "menu"; // Assuming IMenu is defined in a separate file

class CreateCartItemDTO {
  @IsInt()
  cart_item_id: number;

  @IsNotEmpty()
  @ValidateNested()
  cart: ICart;

  @IsInt()
  cart_id: number;

  @IsNotEmpty()
  @ValidateNested()
  menu: IMenu;

  @IsInt()
  menu_id: number;

  @IsNotEmpty()
  @IsInt()
  subtotal: number;

  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @IsNotEmpty()
  @IsInt()
  price_per_item: number;

  constructor(cart_item_id: number, cart: ICart, cart_id: number, menu: IMenu, menu_id: number, subtotal: number, quantity: number, price_per_item: number) {
    this.cart_item_id = cart_item_id;
    this.cart = cart;
    this.cart_id = cart_id;
    this.menu = menu;
    this.menu_id = menu_id;
    this.subtotal = subtotal;
    this.quantity = quantity;
    this.price_per_item = price_per_item;
  }
}

export default CreateCartItemDTO;
