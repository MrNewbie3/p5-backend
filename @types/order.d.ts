import { Canteen, User, Payment, OrderStatus, PaymentStatus, OrderDetail } from "@prisma/client";

interface IOrder {
  order_id: number;
  canteen: Canteen;
  canteen_id: number;
  user: User;
  user_id: number;
  payment_method: Payment;
  payment_method_provider: string;
  amount_total: number;
  fee: number;
  status: OrderStatus;
  process_status: OrderStatus;
  payment_status: PaymentStatus;
  created_at: Date;
  order_details: OrderDetail[];
}

export default IOrder;
