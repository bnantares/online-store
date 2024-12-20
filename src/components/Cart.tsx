import { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import { productAPI } from "../services/ProductService";

const Cart:FC = () => {
    const {cart: cart} = useAppSelector(state => state.cartReducer);
    const productIdsArray = cart.products.map(product => product.productId);
    const {data: products} = productAPI.useFetchCartProductsQuery(productIdsArray);

    return (
        <>
            {products?.map(product => <div key={product.id}>{product.title}</div>)}
            {!products?.length && <div>Корзина пуста</div>}
        </>
    )
}

export default Cart;