import { useState } from "react";
import { productAPI } from "../services/ProductService"
import { ProductItem } from "./ProductItem";
import { Grid, AppShell, Skeleton } from "@mantine/core";

const ProductContainer = () => {
    
    const {data: products, error, isLoading } = productAPI.useFetchAllProductsQuery(15);
    const [productState, setProductState] = useState(products);
    // const skeletonLinesAmount = 15;

    function filterProducts(query: string) {
        const filtered = products?.filter(item => item.title.toLowerCase().includes(query));
        setProductState(filtered);
    }

    return (
        <div>
            <AppShell.Navbar p="md">
                Filter by name
                <input
                    type="search"
                    onChange={(event) => {
                        filterProducts(event.target.value)
                    }} 
                />
                {/* Navbar
                {Array(skeletonLinesAmount)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} h={28} mt="sm" animate={false} />
                  ))} */}
            </AppShell.Navbar>
            {isLoading && <h1>Идет загрузка..</h1>}
            {error && <h1>Ошибка!</h1>}
            <Grid justify="center" align="stretch">
                {productState?.map(product =>
                     <ProductItem
                        key={product.id}
                        product={product}
                     />
                )}
            </Grid>
        </div>
    )
}

export default ProductContainer;