import { useAppSelector } from "../hooks/redux";
import { cartAPI } from "../services/CartService";

const Cart = () => {
    // const {data: cart, error, isLoading} = cartAPI.useFetchCartQuery(1)
    const {cart: cart, error, isLoading} = useAppSelector(state => state.cartReducer);
    
    return (
        <div>
            Это корзина: 
            {cart.products.map(product => <div key={product.productId}>{product.productId}</div>)}
        </div>
    )
}

export default Cart;