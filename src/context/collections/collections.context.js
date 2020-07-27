import { createContext } from "react";
import SHOP_DATA from "./shop.data";

const CollectionsContext = createContext(SHOP_DATA);
// SHOP_DATA will be initial value of context

export default CollectionsContext;
