import { useLoaderData } from "react-router-dom";
import { productAPI } from "../services/ProductService";
import { useActions } from "../hooks/useActions";
import { IProduct } from "../store/models/IProduct";
import { ICartProductItem } from "../store/models/ICart";
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