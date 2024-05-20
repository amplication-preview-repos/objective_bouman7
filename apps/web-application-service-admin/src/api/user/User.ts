import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  orders?: Array<Order>;
  password: string | null;
  reviews?: Array<Review>;
  updatedAt: Date;
  username: string | null;
};
