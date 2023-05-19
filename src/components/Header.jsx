import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <h6>Header works</h6>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/cart'>Cart</Link>
        </>
    )
}

export default Header;