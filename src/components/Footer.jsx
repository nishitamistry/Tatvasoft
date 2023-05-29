import React from "react";
import { addIcon } from "../assets/images";

function Footer(){
    return(
        <>
        <div className='footeralign'>
            { <img src={ addIcon } className='footerimg' alt="" /> }
            <p className="copyright-text">@ 2015 Tatvasoft.com. All rights reserved.</p>
        </div>
        </>
    )
}

export default Footer;