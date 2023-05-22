import React from "react";
import Footer from "../components/Footer";
import { Button, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Header from "../components/Header";

function Register(){   
        return(
        <>
            <Header/>
            <h1>Login or Create an Account</h1>
            <div className="Content">
            <table>
                <tr>
                    <td colSpan="2">
                    <h3>Personal Information</h3>
                    <hr />
                    <h6>Please enter following information to create your account</h6>
                    </td>
                </tr>
                    <tr>
                        <td>
                            <Box component="form" 
                            sx={{'& .MuiTextField-root': { m: 1, width: '357px'}}}
                            noValidate
                            autoComplete="off">
                                <TextField className="field"
                                required
                                id="outlined-required"
                                label="First Name"
                                />
                            </Box>
                        </td>
                        <td>
                            <Box component="form"
                            sx={{'& .MuiTextField-root': { m: 1, width: '357px' },}}
                            noValidate
                            autoComplete="off"><TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            />
                            </Box>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Box component="form"
                            sx={{'& .MuiTextField-root': { m: 1, width: '357px' },}}
                            noValidate
                            autoComplete="off"><TextField
                            required
                            id="outlined-required"
                            label="Email"
                            />
                            </Box>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                        <h3>Login Information</h3>
                        <hr />
                        </td>
                    </tr>
                    <tr>
                        <td>
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
                        </td>
                        <td>
                            <Box component="form"
                            sx={{'& .MuiTextField-root': { m: 1, width: '357px' },}}
                            noValidate
                            autoComplete="off"><TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            />
                            </Box>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Button variant="contained" className="registernbtn">Register</Button>
                        </td>
                    </tr>
                </table>
            
            
            </div>
            <Footer />
        </>
    );
}

export default Register;