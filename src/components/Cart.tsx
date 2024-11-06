import { FC, useEffect } from "react";
import { useAppSelector } from "../hooks/redux";
// import { cartAPI } from "../services/CartService";
import { productAPI } from "../services/ProductService";
import { IProduct } from "../store/models/IProduct";

const Cart:FC = () => {
    const {cart: cart} = useAppSelector(state => state.cartReducer);

    const cartArray: IProduct[] = [];
    const productIdsArray = cart.products.map(product => product.productId);

    const {data: products} = productAPI.useFetchCartProductsQuery(productIdsArray);
    const {data: product} = productAPI.useFetchSpecificProductQuery(1);

    console.log(product)
    console.log(products)

    // useEffect(() => {
    //     for (const productId of productIdsArray) {
    //         const {data: product} = productAPI.useFetchSpecificProductQuery(productId)
    //         if (product) {
    //             cartArray.push(product)
    //         }
    //     }
    // }, [productIdsArray.length])

    // console.log(cartArray)

    // useEffect(() => {
    //     const loadProvider = () => {
    //         productIdsArray.forEach((id) => {
    //             try {
    //                 const {data: product} = productAPI.useFetchSpecificProductQuery(id)
    //                 if (product) {
    //                     cartArray.push(product)
    //                 }
    //             } catch (error) {
    //                 console.log(error)
    //             }
    //         })
    //     }
    //     loadProvider();
    // }, [productIdsArray])

    return (
        <div>
            Это корзина: 
            {!products && <div>Корзина пуста</div>}
            {/* {products!.map(product => <div key={product.id}>{product.title}</div>)} */}

            {/* {cartArray.map(product => <div key={product.id}>{product.title}</div>)} */}
            {/* {cart.products.map(product => <div key={product.productId}>{product.productId}</div>)} */}
        </div>
    )
}

export default Cart;