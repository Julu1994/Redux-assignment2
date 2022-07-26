import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fakeProducts: [
        {
            id: 1,
            title: "Loading",
            price: 0,
            description: "No description availble",
            image: "none",
            rating: {
                rate: 0.0,
            },
        },
    ],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchProductData(state, action) {
            state.fakeProducts = action.payload;
        },
    },
});
export const productAction = productSlice.actions;
export default productSlice;
