import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import shared from '../utils/shared';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import { toast } from 'react-toastify';
import BookListing from '../pages/BookListing';
import { RoutePaths } from '../utils/enum';
import { useContext } from 'react';

const initialUserValues = {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    roleId: 0,
    role: "",
    password: "",
};

const initialState = {
    setUser: () => { },
    user: initialUserValues,
    signOut: () => { },
};
const authContext = createContext(initialState);

export const AuthWrapper = ({ children }) => {
    const [user, _setUser] = useState(initialUserValues);

    const {pathname}=useLocation();

    const navigate = useNavigate(); 

    const setUser = (user) => {
        localStorage.setItem(shared.LocalStorageKeys.USER, JSON.stringify(user));
        _setUser(user);
    };

    const signOut=()=>{
        localStorage.removeItem(shared.LocalStorageKeys.USER);
    _setUser(initialUserValues);
    navigate(RoutePaths.Login);
    };

    useEffect(()=>{
        const str=JSON.parse(localStorage.getItem(shared.LocalStorageKeys.USER))||
        initialUserValues;
        if(str.id){
            _setUser(str);
        }
        if(!str.id){
            navigate(RoutePaths.Login);
        }
    },[]);

    useEffect(() => {
    if(pathname === RoutePaths.Login && user.id) {
        navigate(RoutePaths.BookListing);
    }
    if(!user.id) {
       return;
    }  
    const access = shared.hasAccess(pathname, user);  
    if(!access){
        toast.warning("Sorry,you are not authorized to access this page");
        navigate(RoutePaths.BookListing);
        return;
    }
    // setAppInitilaize(true);
},[user, pathname]);
    const value = {
        user,
        setUser,
        signOut,
    };
    return <authContext.Provider value={value}>{children}</authContext.Provider>
}

export const useAuthContext = () => {
    return useContext(authContext)
}