import { AppBar, Button, List, ListItem, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import shared from "../utils/shared";
import SearchIcon from "@mui/icons-material/Search";
import bookService from "../services/book.service";
import { RoutePaths } from "../utils/enum";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addIcon } from "../assets/images";
import { useAuthContext } from "../context/auth.context";

const HeaderExtra = () => {

    // const classes = headerStyles();
    const authContext = useAuthContext();
    // const cartContext = useCartContext();

    const open = false;
    const [query, setquery] = useState("");
    const [bookList, setbookList] = useState([]);
    const [openSearchResult, setOpenSearchResult] = useState([false]);

    const navigate = useNavigate();

    const openMenu = () => {
        document.body.classList.toggle("open-menu");
    };

    const items = useMemo(() => {
        //     return shared.NavigationItems;
        // }, []);
        return shared.NavigationItems.filter(
            (item) =>
                !item.access.length || item.access.includes(authContext.user.roleId)
        );
    }, []);

    const logOut = () => {
        authContext.signOut();
        // cartContext.emptyCart();
    };

    const searchBook = async () => {
        const res = await bookService.searchBook(query)
        setbookList(res);
    };

    const search = () => {
        document.body.classList.add("search-results-open");
        searchBook();
        setOpenSearchResult(true);
    };
    useEffect(() => {
        setOpenSearchResult(false);
        document.body.classList.remove("search-results-open");
    }, []);

    // const addTocart = (book) => {
    //     if(!authContext.user.id) {
    //         Navigate(RoutePaths.Login);
    //         toast.error("Please login before adding books to cart");
    //     }
    //     else {
    //         Shared.addToCaart(book, authContext.user.id).then((res) => {
    //             if (res.error) {
    //                 toast.error(res.error);
    //             } else {
    //                 toast.success("Item added in cart");
    //                 cartContext.update();
    //             }
    //         });
    //     }
    // };

    return (
        <div>
            {/* // <div className={classes.headerWrapper}> */}
            {/* <AppBar className="site-header" id="header" position="static"> */}
            <div className="top-header" style={{ display: open ? "none" : "block" }}></div>
            <div className="bottom-header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo-wrapper">
                            <Link to="/" className="site-logo" title="logo"><img src={addIcon} className='headerimg' alt="" />
                            </Link>
                        </div>
                        <div className="nav-wrapper">
                            <div className="top-right-bar">
                                <List className="top-nav-bar">
                                    {!authContext.user.id && (
                                        <>
                                            <ListItem>
                                                <NavLink to={RoutePaths.Login} title="Login">
                                                    Login
                                                </NavLink>
                                            </ListItem>
                                            <ListItem>
                                                <Link to={RoutePaths.Register} title="Register">
                                                    Register
                                                </Link>
                                            </ListItem>
                                        </>
                                    )}
                                </List>
                                <List>
                                    {items.map((item, index) => (
                                        <ListItem key={index}>
                                            <Link to={item.route} title={item.name}>
                                                {item.name}
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                                <List className="cart-country-wrap">
                                    <ListItem className="cart-link">
                                        <Link to="/cart">
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                sx={{ textTransform: "capitalize" }}
                                                startIcon={<ShoppingCartIcon style={{ color: "#f14d54" }} />}
                                            >
                                                <span style={{ color: "#f14d54", marginRight: "5px" }}>0</span>
                                                Cart
                                            </Button>
                                        </Link>
                                    </ListItem>
                                    {/* <ListItem className="hamburger" onClick={openMenu}>
                                            <span></span>
                                        </ListItem> */}
                                </List>
                                {authContext.user.id && (
                                    <List className="right">
                                        <Button onClick={() => logOut()} variant="outlined">
                                            Log out
                                        </Button>
                                    </List>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="search-overlay"
                onClick={() => {
                    setOpenSearchResult(false);
                    document.body.classList.remove("search-results-open");
                }}></div>
            <div className="header-search-wrapper">
                <div className="container">
                    <div className="header-search-outer">
                        <div className="header-search-inner">
                            <div className="text-wrapper">
                                <TextField
                                    id="text"
                                    name="text"
                                    placeholder="What are you looking for..."
                                    variant="outlined"
                                    value={query}
                                    onChange={(e) => setquery(e.target.value)} />
                                {openSearchResult && (
                                    <>
                                        <div className="product-listing">
                                            {bookList?.length == 0 && (
                                                <p className="no-product">No product found</p>
                                            )}
                                            <List className="related-product-list">
                                                {bookList?.length > 0 &&
                                                    bookList.map((item, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <div className="inner-block">
                                                                    <div className="left-col">
                                                                        <span className="title">{item.name}</span>
                                                                        <p>{item.description}</p>
                                                                    </div>
                                                                    <div className="right-col">
                                                                        <span className="price">{item.price}</span>
                                                                        {/* <Link onClick={() => addToCart(item)}> */}
                                                                        Add to Cart
                                                                        {/* </Link> */}
                                                                    </div>
                                                                </div>
                                                            </ListItem>
                                                        );
                                                    })}
                                            </List>
                                        </div>
                                    </>
                                )}
                            </div>
                            <Button
                                type="submit"
                                variant="contained"
                                disableElevation
                                onClick={search}
                                style={{ backgroundColor: "#80bf32" }}
                                sx={{ textTransform: "capitalize", fontSize: "16px" }}
                                startIcon={<SearchIcon />}
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </AppBar> */}
        </div>
    );
};
export default HeaderExtra;