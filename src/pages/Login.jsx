import React from "react";
import { Button, List, ListItem, ListItemIcon, ListItemText, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import { Breadcrumbs, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CircleIcon from '@mui/icons-material/Circle';
import { Formik } from "formik";
import * as Yup from "yup";
import authService from "../services/auth.service";
import { toast } from "react-toastify";


function Login() {
    const initialValues = {
        email: "",
        password: "",
    };

    const loginSchema = Yup.object().shape({
        email: Yup.string().email().required("Please enter your email"),
        password: Yup.string().min(6).required("Please enter password with min 6 char"),
    });

    const onSubmit = (values, action) => {
        // console.log(values);
        authService.login(values).then((res) => {
            toast.success("Login successfully.");
            console.log(res);
        })
        .catch(() => {
            toast.error();
        })
        action.resetForm();
    };

    return (
        <>
            <Box display="flex" justifyContent="center" marginTop="50px">
                <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcrump-wrapper" >
                    <Link to="/login" title="Home" style={{ textDecoration: "none", color: "#414141" }}>Home</Link>
                    <Typography color="#f14d54">Create an Account</Typography>
                </Breadcrumbs>
            </Box>
            <Container maxWidth="lg">

                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        style={{ fontWeight: 600 }}
                        textAlign="center"
                        marginTop="50px"
                    >
                        Login or Create An Account
                    </Typography>
                </Box>

                <Grid container marginTop="50px" spacing={4} >
                    <Grid item xs={6}>

                        <Typography variant="h6" gutterBottom >
                            New Customers
                        </Typography>
                        <hr />
                        <Typography variant="Body1" gutterBottom color="grey" >
                            Registration free and easy
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon ><CircleIcon sx={{ color: "black", fontSize: "small" }} /></ListItemIcon><ListItemText>Faster checkout</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon ><CircleIcon sx={{ color: "black", fontSize: "small" }} /></ListItemIcon><ListItemText>Save multiple shipping address</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon ><CircleIcon sx={{ color: "black", fontSize: "small" }} /></ListItemIcon><ListItemText>View and track orders and more</ListItemText>
                            </ListItem>


                        </List>
                        <Grid item marginBottom="30px" xs={6}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="error"
                                sx={{ textTransform: "capitalize", backgroundColor: "#f14d54" }}
                                href="/register"
                                style={{ marginTop: "auto" }}
                            >
                                Create an Account
                            </Button>
                        </Grid>
                    </Grid>


                    <Grid item xs={6}>

                        <Typography variant="h6" gutterBottom >
                            Registered Customers
                        </Typography>
                        <hr />
                        <Typography variant="body1" gutterBottom color="grey">
                            If you have an account with us, please login
                        </Typography>


                        <Grid item xs={6}>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={loginSchema}
                                onSubmit={onSubmit}
                            >
                                {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isValid }) => (
                                    <form onSubmit={handleSubmit}>
                                        <Typography variant="body1" gutterBottom>
                                            Email Address *
                                        </Typography>
                                        <TextField
                                            type="email"
                                            size="small"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.email && errors.email}
                                            helperText={touched.email && errors.email}
                                            sx={{ width: "400px" }}
                                        />


                                        <Typography variant="body1" gutterBottom>
                                            Password *
                                        </Typography>
                                        <TextField
                                            type="password"
                                            size="small"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.password && errors.password}
                                            helperText={touched.password && errors.password}
                                            sx={{ width: "400px" }}
                                        />
                                        <Grid item paddingTop="11px" marginBottom="30px" xs={6}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="error"
                                                sx={{ textTransform: "capitalize", backgroundColor: "#f14d54", width: "100px", marginTop: "auto" }}
                                            >
                                                Login
                                            </Button>
                                        </Grid >
                                    </form>
                                )}
                            </Formik>
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        </>
    );
}

export default Login;