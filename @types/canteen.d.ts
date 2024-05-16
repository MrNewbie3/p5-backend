// @types/canteen.d.ts

import { Menu, Order, User } from "@prisma/client";

interface ICanteen {
  user_id: number;
  canteen_number: number;
  image_url: string;
  payment_method: string | undefined;
  bank_account_number: string | undefined;
  last_seen: Date | undefined;
}

export default ICanteen;
