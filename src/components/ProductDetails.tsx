import { useParams } from "react-router-dom";
import { productAPI } from "../services/ProductService";
import { useActions } from "../hooks/useActions";
import { ICartProductItem } from "../store/models/ICart";
import { Carousel } from '@mantine/carousel';
import { useAppSelector } from "../hooks/redux";

const ProductDetails = () => {
    const dispatch = useActions();
    const {cart: cart} = useAppSelector(state => state.cartReducer);
    const productIdsArray = cart.products.map(product => product.productId);

    const params = useParams();
    const productId: number = Number(params.productId)
    const {data: product} = productAPI.useFetchSpecificProductQuery(productId);

    const isAdded: boolean = productIdsArray.includes(productId);

    const addItemToCart = (product: ICartProductItem) => {
        dispatch.addToCart(product);
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
            {isAdded 
                ? <button disabled={isAdded}>
                    Already added!
                  </button> 
                : <button onClick={() => addItemToCart({productId: product!.id, quantity: 1})}>
                    Add to cart
                  </button>
            }
            
        </div>
    )
}

export default ProductDetails;