import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
