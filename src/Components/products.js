import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Redux/Actions/actionCreator";
import ProductCard from "./card";
import { Grid } from "@mui/material";

export default function Products() {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.product.fakeProducts);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

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
