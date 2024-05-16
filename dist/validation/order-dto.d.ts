import ICanteen from "canteen";
import IUser from "@types/user";
import IOrderDetail from "order_detail";
import { OrderStatus, PaymentStatus, Payment } from "@prisma/client";
interface CreateOrderDto {
  order_id: number;
  canteen: ICanteen;
  canteen_id: number;
  user: IUser;
  user_id: number;
  payment_method: Payment;
  payment_method_provider: string;
  amount_total: number;
  fee: number;
  status: OrderStatus;
  process_status: OrderStatus;
  payment_status: PaymentStatus;
  created_at: Date;
  order_details: IOrderDetail[];
  constructor(
    order_id: number,
    canteen: ICanteen,
    canteen_id: number,
    user: IUser,
    user_id: number,
    payment_method: Payment,
    payment_method_provider: string,
    amount_total: number,
    fee: number,
    status: OrderStatus,
    process_status: OrderStatus,
    payment_status: PaymentStatus,
    created_at: Date,
    order_details: IOrderDetail[]
  );
}
export default CreateOrderDto;
