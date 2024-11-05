export enum CartActionTypes {
    ADD_ITEM = "ADD_ITEM"
}

interface AddItemToCartAction {
    type: CartActionTypes.ADD_ITEM
}

export type CartAction = AddItemToCartAction