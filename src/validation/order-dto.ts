import { IsInt, IsNotEmpty, IsString, IsEnum, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import ICanteen from "canteen"; // Assuming ICanteen is defined in a separate file
import IUser from "user"; // Assuming IUser is defined in a separate file
import IOrderDetail from "order_detail"; // Assuming IOrderDetail is defined in a separate file
import { OrderStatus, PaymentStatus, Payment } from "@prisma/client";

class CreateOrderDto {
  @IsInt()
  order_id: number;

  @IsNotEmpty()
  @ValidateNested()
  canteen: ICanteen;

  @IsInt()
  canteen_id: number;

  @IsNotEmpty()
  @ValidateNested()
  user: IUser;

  @IsInt()
  user_id: number;

  @IsEnum(Payment)
  payment_method: Payment;

  @IsNotEmpty()
  @IsString()
  payment_method_provider: string;

  @IsNotEmpty()
  @IsInt()
  amount_total: number;

  @IsNotEmpty()
  @IsInt()
  fee: number;

  @IsEnum(OrderStatus)
  status: OrderStatus;

  @IsEnum(OrderStatus)
  process_status: OrderStatus;

  @IsEnum(PaymentStatus)
  payment_status: PaymentStatus;

  @IsDate()
  created_at: Date;

  @IsNotEmpty()
  @ValidateNested({ each: true })
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
  ) {
    this.order_id = order_id;
    this.canteen = canteen;
    this.canteen_id = canteen_id;
    this.user = user;
    this.user_id = user_id;
    this.payment_method = payment_method;
    this.payment_method_provider = payment_method_provider;
    this.amount_total = amount_total;
    this.fee = fee;
    this.status = status;
    this.process_status = process_status;
    this.payment_status = payment_status;
    this.created_at = created_at;
    this.order_details = order_details;
  }
}

export default CreateOrderDto;
