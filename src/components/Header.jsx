import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar"
import { Box, Button, Container, Divider, Stack } from "@mui/material";
import { addIcon } from "../assets/images";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const linkStyle = {
    textDecoration: "none",
};

const Header = () => {
    return (
        <>
            <div class="top-header"></div>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        height: "92px",
                    }}
                >
                    <div className="header-img-wrapper"><img src={addIcon} className='headerimg' alt="" /></div>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <Stack
                            direction="row"
                            spacing={1}
                            divider={<Divider orientation="vertical" flexItem />}
                        >
                            <Link to="/login" style={linkStyle}>
                                <Button
                                    variant="text"
                                    color="error"
                                    sx={{ textTransform: "capitalize" }}
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link to="/register" style={linkStyle}>
                                <Button
                                    variant="text"
                                    color="error"
                                    sx={{ textTransform: "capitalize" }}
                                >
                                    Register
                                </Button>
                            </Link>
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
                    </Box>
                </Box>
            </Container>

            {/* <Box
                sx={{
                    height: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px",
                    backgroundColor: "#f5f5f5",
                }}
            > */}
                <Searchbar />
                {/* <Button
                    variant="contained"
                    style={{ backgroundColor: "#80bf32" }}
                    sx={{ textTransform: "capitalize", fontSize: "16px" }}
                    startIcon={<SearchIcon />}
                >
                    Search
                </Button>
                <Button
                    variant="contained"
                    sx={{ textTransform: "capitalize", backgroundColor: "#f14d54", fontSize: "16px" }}
                >
                    Cancel
                </Button> */}
            {/* </Box> */}
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