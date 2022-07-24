const initialState = {
    products: {
        id: 0,
        title: "NULL TITLE",
    },
};

export const productReducer = (state = initialState, action) => {
    if (action.type === "GET-PRODUCTS") {
        return {
            products: {
                id: state.products.id + 10,
                title: action.payload,
            },
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
