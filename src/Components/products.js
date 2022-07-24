import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/Actions/actionCreator";
import ProductCard from "./card";

export default function Products() {
    const dispatch = useDispatch();
    const ProductHandler = async () => {
        const ShopData = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error) => console.log(error));
        dispatch(getProducts(ShopData.data));
    };
    const selector = useSelector((state) => state.fakeProducts);
    console.log(selector, "selector");

    useEffect(() => {
        ProductHandler();
    }, []);

    return (
        <div>
            {selector.map((item) => (
                <ProductCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    productImg={item.image}
                />
            ))}
        </div>
    );
}
