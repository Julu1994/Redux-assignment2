import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/Actions/actionCreator";
import ProductCard from "./card";
import { Grid } from "@mui/material";

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
        <Grid
            container
            spacing={4}
            justify="center"
            alignItems="center"
            style={{ marginTop: "50px" }}>
            {selector.map((item) => (
                <ProductCard
                    key={item.id}
                    title={item.title}
                    description={item.rating.rate}
                    price={item.price}
                    productImg={item.image}
                />
            ))}
        </Grid>
    );
}
