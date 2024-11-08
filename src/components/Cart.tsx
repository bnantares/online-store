import { FC, Suspense } from "react";
import { useAppSelector } from "../hooks/redux";
import { productAPI } from "../services/ProductService";

const Cart:FC = () => {
    const {cart: cart} = useAppSelector(state => state.cartReducer);
    const productIdsArray = cart.products.map(product => product.productId);
    const {data: products} = productAPI.useFetchCartProductsQuery(productIdsArray);

    return (
        <div>
            {!products?.length && <div>Корзина пуста</div>}
            <Suspense fallback={<Loading />}>
                {products?.map(product => <div key={product.id}>{product.title}</div>)}
            </Suspense>
        </div>
    )
}

function Loading() {
    return (
        <h2>Загрузка...</h2>
    )
}

export default Cart;