import { cartAPI } from "../services/CartService";

const Cart = () => {
    const {data: cart, error, isLoading} = cartAPI.useFetchCartQuery(1)

    return (
        <div>
            {isLoading && <h1>Идет загрузка..</h1>}
            {error && <h1>Ошибка!</h1>}
            Cart
            Добавлено продкутов в корзину: {cart?.products.length}
        </div>
    )
}

export default Cart;