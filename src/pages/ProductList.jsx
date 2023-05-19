import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function ProductList(){
    return(
        <>
        <Header />
        <Link to='/product-edit'>ProductEdit</Link>
        <Footer />
        </>
    );
}

export default ProductList;