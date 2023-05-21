import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Login(){
    return(
        <>
            <Header />
            <h1>Login Component</h1><br />
            <Link to="/register">Register</Link><br />
            <Link to='/product-list'>Login</Link>
            <Footer />
        </>
    );
}

export default Login;