import { useLoaderData } from "react-router-dom";
import { productAPI } from "../services/ProductService";

export function loader({ params }) {
    return (params.productId)
}

const ProductDetails = () => {
    const productId: number = useLoaderData() as number;
    const {data: product} = productAPI.useFetchSpecificProductQuery(productId);
    return (
        <div>
            {product?.title}
        </div>
    )
}

export default ProductDetails;