import { iShopItem } from "./shopitem.interface";

export interface iCart {
    item: iShopItem;
    quantity: number;
}