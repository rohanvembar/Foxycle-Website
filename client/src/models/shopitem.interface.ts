export interface iShopItem {
    id: number,
    name: string,
    price: number,
    brand: string,
    categories: string[],
    image: string,
    delivery: boolean,
    quantity: number,
    description: string
}