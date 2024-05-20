import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
