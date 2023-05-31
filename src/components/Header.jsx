import { AppBar, Box, Button, Container, Divider, List, ListItem, Stack, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import shared from "../utils/shared";
import SearchIcon from "@mui/icons-material/Search";
import bookService from "../services/book.service";
import { RoutePaths } from "../utils/enum";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addIcon } from "../assets/images";
import { useAuthContext } from "../context/auth.context";

const Header = () => {

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

    const linkStyle = {
        textDecoration: "none",
        color: " #f14d54",
    };
    return (
        <>
            <div className="top-header" style={{ display: open ? "none" : "block" }}></div>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        height: "92px",
                    }}
                >
                    <div className="header-img-wrapper"><img src={addIcon} className='headerimg' alt="" /></div>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px"}}>
                        <Stack direction="row" spacing={1} >
                            <List>
                                {!authContext.user.id && (
                                    <>
                                        <ListItem>
                                            <NavLink to={RoutePaths.Login} title="Login" style={linkStyle}>
                                                Login
                                            </NavLink>
                                        </ListItem>
                                    </>
                                )}
                            </List>
                            <Divider orientation="vertical" flexItem />
                            <List>
                                {!authContext.user.id && (
                                    <>
                                        <ListItem>
                                            <Link to={RoutePaths.Register} title="Register" style={linkStyle}>
                                                Register
                                            </Link>
                                        </ListItem>
                                    </>
                                )}
                                {items.map((item, index) => (
                                    <ListItem key={index}>
                                        <Link to={item.route} title={item.name}>
                                            {item.name}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Stack>

                        <Link to="/cart" style={linkStyle}>
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
                        {authContext.user.id && (
                            <List className="right">
                                <Button onClick={() => logOut()} variant="outlined">
                                    Log Out
                                </Button>
                            </List>
                        )}
                    </Box>
                </Box>
            </Container>
            <div>
                <div
                    className="search-overlay"
                    onClick={() => {
                        setOpenSearchResult(false);
                        document.body.classList.remove("search-results-open");
                    }}>

                </div>
                <Box
                    sx={{
                        height: "80px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px",
                        backgroundColor: "#f5f5f5",
                    }}
                >
                    <div className="search-container">
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
                </Box>
            </div>
        </>
    );
};

export default Header;

// import { TextField } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";
// export const Header = () => {

// const items = usememo(() => {
//     return shared.NavigationItems.filter(
//         (item) =>
//         !item.access.length || item.access.includes(authContext.user.roleId)
//     );
// },[authContext.user]);
//     return (
//         <div className={classes.headerWrapper}>
//             <AppBar className="site-header" id="header" position="static">
//                 <div className="top-header" style={{ display: open ? "none" : "block" }}></div>
//                 <div className="bottom-header">
//                     <div className="container">
//                         <div className="header-wrapper">
//                             <div className="logo-wrapper">
//                                 <Link src={siteLogo} alt="logo /">
//                                 </Link>
//                             </div>
//                             <div className="nav-wrapper">
//                                 <div className="top-right-bar">
//                                     <List className="top-nav-bar">
//                                         {!authContext.user.id && (
//                                             <>
//                                                 <ListItem>
//                                                     <Navlink to={RoutePaths.Login} title="Login">
//                                                         Login
//                                                     </Navlink>
//                                                 </ListItem>
//                                                 <ListItem>
//                                                     <Link to={RoutePaths.Register} title="Register">
//                                                         Register
//                                                     </Link>
//                                                 </ListItem>
//                                             </>
//                                         )}
//                                        {items.map((item, index) => (
//                                         <ListItem key={index}>
//                                             <Link to={item.route} title={item.name}>
//                                                 {item.name}
//                                             </Link>
//                                         </ListItem>
//                                        ))}
//                                     </List>
//                                     <List className="cart-country-wrap">
//                                         <Listitem className="cart-link">
//                                             <Link to="/cart" title="Cart">
//                                                 <img src={cartIcon} alt="cart.png" />
//                                                 <span>{cartContext.cartData.length}</span>
//                                                 Cart
//                                             </Link>
//                                         </Listitem>
//                                         <Linkitem className="hamburger" onClick={openMenu}>
//                                             <span></span>
//                                         </Linkitem>
//                                     </List>
//                                     {authContext.user.id && (
//                                         <List className="right">
//                                             <Button onClick={() => logOut()} variant="outlined">
//                                                 Log out
//                                             </Button>
//                                         </List>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="header-search-wrapper">
//                     <div className="container">
//                         <div className="header-search-outer">
//                             <div className="header-search-inner">
//                                 <div className="text-wrapper">
//                                     <TextField
//                                      id="text"
//                                      name="text"
//                                      placeholder="What are you looking for..."
//                                      variant="outlined"
//                                      value={query}
//                                      onChange={(e) => setQuery(e.target.value)}/>
//                                      {openSearchResult && }
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </AppBar>
//         </div>
//     )
// }