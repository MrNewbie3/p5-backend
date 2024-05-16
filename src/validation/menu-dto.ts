import { IsInt, IsNotEmpty, ValidateNested, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import ICanteen from "canteen"; // Assuming ICanteen is defined in a separate file
import IOrderDetail from "order_detail"; // Assuming IOrderDetail is defined in a separate file
import ICartItem from "cart_item"; // Assuming ICartItem is defined in a separate file
import IMenu from "../../@types/menu";

class CreateMenuDTO implements IMenu {
  @IsInt()
  canteen_id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsInt()
  price: number;

  @IsNotEmpty()
  @IsInt()
  stock_amount: number;

  @IsOptional()
  @IsString()
  image_url?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  order_details: IOrderDetail[];

  @IsOptional()
  @ValidateNested({ each: true })
  cart_items: ICartItem[];

  constructor(canteen: ICanteen, canteen_id: number, name: string, slug: string, price: number, stock_amount: number, order_details: IOrderDetail[], cart_items: ICartItem[], image_url?: string) {
    this.canteen_id = canteen_id;
    this.name = name;
    this.slug = slug;
    this.price = price;
    this.stock_amount = stock_amount;
    this.image_url = image_url;
    this.order_details = order_details;
    this.cart_items = cart_items;
  }
}

export default CreateMenuDTO;
