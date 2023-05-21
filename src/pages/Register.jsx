import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Register(){   
        return(
        <>
            <Header />
            <h1>Login or Create an Account</h1>
            <div className="Content">
            <h3>Personal Information</h3>
            <h6>Please enter following information to create your account</h6>
            <Box component="form" 
            sx={{'& .MuiTextField-root': { m: 1, width: '357px' },}}
            noValidate
            autoComplete="off">
                <TextField
                required
                id="outlined-required"
                label="First Name"
                />
                <TextField
                required
                id="outlined-required"
                label="Last Name"
                />
                <br/>
                <TextField
                required
                id="outlined-required"
                label="Email"
                />
                </Box>
            <h3>Login Information</h3>
            <Box component="form" 
            sx={{'& .MuiTextField-root': { m: 1, width: '357px' },}}
            noValidate
            autoComplete="off">    
            <TextField
                required
                id="outlined-required-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            </Box>
            <Button variant="contained" className="registernbtn">Register</Button>
            </div>
            <Footer />
        </>
    );
}

export default Register;