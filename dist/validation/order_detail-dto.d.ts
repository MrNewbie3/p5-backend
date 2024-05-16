import IOrder from "order";
import IMenu from "menu";
interface CreateOrderDetailDTO {
  order_detail_id: number;
  order: IOrder;
  order_id: number;
  menu: IMenu;
  menu_id: number;
  sub_total: number;
  quantity: number;
  constructor(order_detail_id: number, order: IOrder, order_id: number, menu: IMenu, menu_id: number, sub_total: number, quantity: number);
}
export default CreateOrderDetailDTO;
