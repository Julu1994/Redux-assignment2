import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductCard from "./card";

export default function Products() {
    const getProducts = async () => {
        const data = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error) => console.log(error));
        console.log(data);
    };
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <ProductCard />
        </div>
    );
}
