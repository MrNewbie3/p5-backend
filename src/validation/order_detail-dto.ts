import { IsInt, IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import IOrder from "order"; // Assuming IOrder is defined in a separate file
import IMenu from "menu"; // Assuming IMenu is defined in a separate file

class CreateOrderDetailDTO {
  @IsInt()
  order_detail_id: number;

  @IsNotEmpty()
  @ValidateNested()
  order: IOrder;

  @IsInt()
  order_id: number;

  @IsNotEmpty()
  @ValidateNested()
  menu: IMenu;

  @IsInt()
  menu_id: number;

  @IsNotEmpty()
  @IsInt()
  sub_total: number;

  @IsNotEmpty()
  @IsInt()
  quantity: number;

  constructor(order_detail_id: number, order: IOrder, order_id: number, menu: IMenu, menu_id: number, sub_total: number, quantity: number) {
    this.order_detail_id = order_detail_id;
    this.order = order;
    this.order_id = order_id;
    this.menu = menu;
    this.menu_id = menu_id;
    this.sub_total = sub_total;
    this.quantity = quantity;
  }
}

export default CreateOrderDetailDTO;
