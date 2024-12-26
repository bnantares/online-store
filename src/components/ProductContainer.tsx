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
import { checkboxes } from "../store/reducers/checkboxes";

const ProductContainer = () => {
    const dispatch = useAppDispatch();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {data: _products, error, isLoading } = productAPI.useFetchAllProductsQuery(15);
    
    const stringFilterValue = useAppSelector(state => state.filterReducer.searchString);
    const selectedCategoriesArray = useAppSelector(state => state.filterReducer.selectedCategoriesArray)

    const veryFilteredProducts = useSelector(memoizedSelectedAndFiltered)

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
                    value={stringFilterValue}
                    type="search"
                    onChange={(event) => {
                        dispatch(setSearchString(event.target.value));
                    }} 
                />
                {checkboxes.map(checkbox => 
                <Checkbox
                    name={checkbox.name}
                    label={checkbox.label}
                    checked={selectedCategoriesArray.includes(checkbox.name)}
                    onChange={(event) => {
                        dispatchAction(event.target.checked, event.target.name);
                    }}
                />
                )}
            </AppShell.Navbar>
            {isLoading && <h1>Идет загрузка..</h1>}
            {error && <h1>Ошибка!</h1>}
            <Grid justify="center" align="stretch">
                {veryFilteredProducts?.map(product =>
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