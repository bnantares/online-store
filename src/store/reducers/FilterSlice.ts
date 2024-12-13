import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { productAPI } from "../../services/ProductService";
import { RootState } from "../store";


interface FilterState {
    searchString: string,
    selectedCategoriesArray: string[]
}

const initialState: FilterState = {
    searchString: '',
    selectedCategoriesArray: []
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchString(state, action: PayloadAction<string>) {
            state.searchString = action.payload;
        },
        addCategory(state, action: PayloadAction<string>) {
            state.selectedCategoriesArray.push(action.payload)
        },
        removeCategory(state, action: PayloadAction<string>) {
            state.selectedCategoriesArray.splice(state.selectedCategoriesArray.indexOf(action.payload), 1)
        }
    },
})

const filterValue = (state: RootState) => state.filterReducer.searchString;
const selectedCategories = (state: RootState) => state.filterReducer.selectedCategoriesArray;

const getProducts = productAPI.endpoints.fetchAllProducts.select(15);

export const memoizedSelectedAndFiltered = createSelector(
    [getProducts, filterValue, selectedCategories],
    (state, filterValue, selectedCategories) => {
        const firstResult = state?.data?.filter(item => item.title.toLowerCase().includes(filterValue));
        if (selectedCategories.length) {
            const secondResult = firstResult?.filter(item => selectedCategories.includes(item.category));
            return secondResult
        }
        return firstResult
    }
)

export const { setSearchString, addCategory, removeCategory } = filterSlice.actions;
export const filterReducer = {
    filter: filterSlice.reducer
}