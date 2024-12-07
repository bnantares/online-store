import { productAPI } from "../services/ProductService"
import { ProductItem } from "./ProductItem";
import { Grid, AppShell, Checkbox} from "@mantine/core";
import { 
    setSearchString, 
    addCategory, 
    removeCategory, 
    memoizedSelectedAndFiltered
} from "../store/reducers/FilterSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProductContainer = () => {
    const dispatch = useAppDispatch();
    const {data: products, error, isLoading } = productAPI.useFetchAllProductsQuery(15);
    
    const filterValue = useAppSelector(state => state.filterReducer.searchString);

    const veryFilteredProducts = useSelector(memoizedSelectedAndFiltered)

    const [jeweleryChecked, setJeweleryChecked] = useState(false);
    const [electronicsChecked, setElectronicsChecked] = useState(false);
    const [mensClothingChecked, setMensClothingChecked] = useState(false);
    const [womensClothingChecked, setWomensClothingChecked] = useState(false);

    const dispatchAction = (isChecked: boolean, category: string) => {
        const categoryLowerCased = category.toLowerCase();
        if (isChecked) {
            dispatch(addCategory(categoryLowerCased))
        } else {
            dispatch(removeCategory(categoryLowerCased))
        }
    }

    return (
        <div>
            <AppShell.Navbar p="md">
                Filter by name
                <input
                    value={filterValue}
                    type="search"
                    onChange={(event) => {
                        dispatch(setSearchString(event.target.value));
                    }} 
                />
                <Checkbox
                    name="jewelery"
                    label="Jewelery"
                    checked={jeweleryChecked}
                    onChange={(event) => {
                        setJeweleryChecked(event.target.checked);
                        dispatchAction(event.target.checked, event.target.name);
                    }}
                />
                <Checkbox
                    name="electronics"
                    label="Electronics"
                    checked={electronicsChecked}
                    onChange={(event) => {
                        setElectronicsChecked(event.target.checked);
                        dispatchAction(event.target.checked, event.target.name);
                    }}
                />
                <Checkbox
                    name="men's clothing"
                    label="Men's clothing"
                    checked={mensClothingChecked}
                    onChange={(event) => {
                        setMensClothingChecked(event.target.checked);
                        dispatchAction(event.target.checked, event.target.name);
                    }}
                />
                <Checkbox
                    name="women's clothing"
                    label="Women's clothing"
                    checked={womensClothingChecked}
                    onChange={(event) => {
                        setWomensClothingChecked(event.target.checked);
                        dispatchAction(event.target.checked, event.target.name);
                    }}
                />
            </AppShell.Navbar>
            {isLoading && <h1>Идет загрузка..</h1>}
            {error && <h1>Ошибка!</h1>}
            {/* <Suspense fallback={<Loading />}> */}
                <Grid justify="center" align="stretch">
                    {veryFilteredProducts?.map(product =>
                         <ProductItem
                            key={product.id}
                            product={product}
                         />
                    )}
                </Grid>
            {/* </Suspense>    */}
        </div>
    )
}

// function Loading() {
//     return (
//         <h2>Загрузка...</h2>
//     )
// }

export default ProductContainer;