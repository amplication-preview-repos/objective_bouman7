import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  password?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
  username?: StringNullableFilter;
};
