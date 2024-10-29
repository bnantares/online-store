import { productAPI } from "../services/ProductService"
import { ProductItem } from "./ProductItem";

const ProductContainer = () => {
    const {data: products, error, isLoading } = productAPI.useFetchAllProductsQuery(5);

    return (
        <div>
            {isLoading && <h1>Идет загрузка..</h1>}
            {error && <h1>Ошибка!</h1>}
            {products?.map(product =>
                 <ProductItem
                    key={product.id}
                    product={product}
                 />
            )}
        </div>
    )
}

export default ProductContainer;