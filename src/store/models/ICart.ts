export interface ICart {
    id: number;
    userId: number;
    products: ICartProductItem[];
}

export interface ICartProductItem {
    productId: number;
    quantity: number;
}