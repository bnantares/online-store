import { useLoaderData } from "react-router-dom";
import { productAPI } from "../services/ProductService";
import { useActions } from "../hooks/useActions";
import { ICartProductItem } from "../store/models/ICart";
import { Carousel } from '@mantine/carousel';
import { useState } from "react";

export function loader({ params }) {
    return (params.productId)
}

const ProductDetails = () => {
    const [isAdded, setIsAdded] = useState(false);
    const productId: number = useLoaderData() as number;
    const {data: product} = productAPI.useFetchSpecificProductQuery(productId);
    const dispatch = useActions()

    const addItemToCart = (product: ICartProductItem) => {
        dispatch.addToCart(product)
        setIsAdded(true);
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