export const getProducts = (data) => {
    return {
        type: "GET-PRODUCTS",
        payload: data,
    };
};

export const addProducts = (data) => {
    return {
        type: "ADD-PRODUCTS",
        payload: data,
    };
};
