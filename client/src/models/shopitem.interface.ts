export interface iShopItem {
    id: number,
    name: string,
    price: number,
    saleprice: number,
    brand: string,
    categoryId: number,
    image: string,
    delivery: boolean,
    quantity: number,
    description: string
}