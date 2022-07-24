import React from "react";
import Products from "./Components/products";
import SearchAppBar from "./Components/header";

export default function Layout() {
    return (
        <div>
            <SearchAppBar />
            <Products />
        </div>
    );
}
