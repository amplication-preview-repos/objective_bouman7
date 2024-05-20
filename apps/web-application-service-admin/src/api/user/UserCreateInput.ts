import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password?: string | null;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
