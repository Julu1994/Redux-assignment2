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

export const productReducer = (state = initialState, action) => {
    if (action.type === "GET_DATA") {
        return {
            fakeProducts: action.payload,
        };
    }
    if (action.type === "ADD-PRODUCTS") {
        return {
            products: {
                id: state.products.id + 20,
                title: action.payload,
            },
        };
    }
    return state;
};
