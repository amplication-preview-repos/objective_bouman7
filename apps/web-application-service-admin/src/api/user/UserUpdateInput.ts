import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string | null;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  username?: string | null;
};
