import axios from "axios";

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

export const fetchData = () => {
    return async function (dispatch) {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error) => console.log(error));
        console.log(response.data);
        dispatch({
            type: "GET_DATA",
            payload: response.data,
        });
    };
};
