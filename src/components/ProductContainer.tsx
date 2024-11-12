import { productAPI } from "../services/ProductService"
import { ProductItem } from "./ProductItem";
import { Grid, AppShell, Skeleton } from "@mantine/core";

const ProductContainer = () => {
    const {data: products, error, isLoading } = productAPI.useFetchAllProductsQuery(15);

    return (
        <div>
            <AppShell.Navbar p="md">
                Navbar
                {Array(15)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} h={28} mt="sm" animate={false} />
                  ))}
            </AppShell.Navbar>
            {isLoading && <h1>Идет загрузка..</h1>}
            {error && <h1>Ошибка!</h1>}
            <Grid justify="center" align="stretch">
                {products?.map(product =>
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