import React from "react";
import MediaCard from "./Components/card";
import SearchAppBar from "./Components/header";

export default function Layout() {
    return (
        <div>
            <SearchAppBar />
            <MediaCard />
        </div>
    );
}
