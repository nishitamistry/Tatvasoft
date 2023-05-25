import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar"
import { Box, Button, Container, Divider, Stack } from "@mui/material";
import { addIcon } from "../assets/images";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const linkStyle = {
    textDecoration: "none",
};

const Header = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        height: "92px",
                    }}
                >
                    <img src={addIcon} className='headerimg' alt="" style={{paddingTop: "12px"}}/>
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
                <Searchbar />
                <Button
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
                </Button>
            </Box>
        </>
    );
};

export default Header;