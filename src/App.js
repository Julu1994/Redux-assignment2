import "./App.css";
import Layout from "./layout";
import { createSlice } from "@reduxjs/toolkit";

function App() {
    const slice = createSlice({
        name: "d",
    });
    console.log(slice);
    return (
        <div className="App">
            <Layout />
        </div>
    );
}

export default App;
