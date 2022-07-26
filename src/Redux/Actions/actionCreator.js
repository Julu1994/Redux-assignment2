import axios from "axios";
import { productAction } from "../reducer";

export const fetchData = () => {
    return async function (dispatch) {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error) => console.log(error));
        console.log(response.data);
        dispatch(productAction.fetchProductData(response.data));
    };
};
