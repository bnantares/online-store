import { useParams } from "react-router-dom";
import { productAPI } from "../services/ProductService";
import { ICartProductItem } from "../store/models/ICart";
import { Carousel } from '@mantine/carousel';
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { cartSlice } from "../store/reducers/CartSlice";

const ProductDetails = () => {
    const dispatch = useAppDispatch()
    const {cart: cart} = useAppSelector(state => state.cartReducer);
    const productIdsArray = cart.products.map(product => product.productId);

    const params = useParams();
    const productId = Number(params.productId);
    const {data: product} = productAPI.useFetchSpecificProductQuery(productId);

    const isAdded: boolean = productIdsArray.includes(productId);

    const addItemToCartt = (product: ICartProductItem) => {
        dispatch(cartSlice.actions.addItem(product))
    }

    if (!product) {
        return <div>Загрузка товара...</div>
    }

    return (
        <div>
            ID: {product?.id}
            <br />
            TITLE: {product?.title}
            <br />
            <Carousel
                withIndicators
                height={200}
            >
                <Carousel.Slide><img src={product?.image} width={250} height={250}/></Carousel.Slide>
                <Carousel.Slide><img src={product?.image} width={250} height={250}/></Carousel.Slide>
                <Carousel.Slide><img src={product?.image} width={250} height={250}/></Carousel.Slide>
            </Carousel>
            DESC: {product?.description}
            <br />
            PRICE: {product?.price}$
            <br />
            
            {isAdded && product?.id
                ? <button disabled={isAdded}>
                    Already added!
                  </button> 
                : <button onClick={() => addItemToCartt({productId: product!.id, quantity: 1})}>
                    Add to cart
                  </button>
            }
            
        </div>
    )
}

export default ProductDetails;