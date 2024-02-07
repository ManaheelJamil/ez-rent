import { createSlice } from "@reduxjs/toolkit";
import { showProducts, updateWishlistProduct,userWishlistProduct} from './productAction'


interface ProductState {
    products: any[];
    wishlists: any[];
    loading: boolean;
    error: string | null | undefined;
    userWishlists: any[]
}
const initialState: ProductState = {
    products: [],
    wishlists : [],
    userWishlists: [],
    loading: false,
    error: null,
};



export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(showProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(showProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(showProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateWishlistProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateWishlistProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.wishlists = action.payload;
            })
            .addCase(updateWishlistProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(userWishlistProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(userWishlistProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.userWishlists = action.payload;
            })
            .addCase(userWishlistProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


    },

});

export default productSlice.reducer;