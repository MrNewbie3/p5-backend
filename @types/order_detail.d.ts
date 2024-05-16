import IMenu from "./menu";
import IOrder from "./order";

interface IOrderDetail {
  order_detail_id: number;
  order: IOrder;
  order_id: number;
  menu: IMenu;
  menu_id: number;
  sub_total: number;
  quantity: number;
}

export default IOrderDetail;
