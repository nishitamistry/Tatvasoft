import React from "react";
import cartService from "../service/cart.service";
import { useAuthContext } from "./auth";
import { createContext } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";

const initialState = {
    cartData: [],
    updateCart: ()=>{},
    emptyCart: ()=>{}
}

export const CartContext = createContext(initialState);

export const CartWrapper = ({children}) => {
    const authContext = useAuthContext();

    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        updateCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [authContext.user.id]);

    const updateCart = (updatedCartList) => {
        if(updatedCartList) {
            setCartData(updatedCartList);
        } else if (authContext.user.id) {
                cartService.getList(authContext.user.id).then((res)=> setCartData(res));
        }
    }

    const emptyCart =() => {
        setCartData([]);
    };

    const value = {
        cartData,
        updateCart,
        emptyCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
    return useContext(CartContext);
};