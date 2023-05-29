import React from "react";
import { Button, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import {toast} from "react-toastify";
import authService from "../services/auth.service";
// import userService from "./service/user.service";
// import { useState } from "react";
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    // role:"",
    roleId:0,
};
const registerSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required("please enter your first name"),
    lastName: Yup.string().min(2).max(25).required("please enter your last name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter password with min 6 char"),
    confirmpassword: Yup.string().required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
    // role:Yup.string().required("please enter role"),
  });
    


function Register() {
//   const [roleList,setRoleList]=useState("");
//   // const navigate=useNavigate();
//  const getAllRoles=()=>{
//   userService.getAllRoles().then((res)=>{
//     setRoleList(res);
//   });
// };
    //directly destructure the formik in values, errors...  
    const { values, errors, touched, handleBlur, handleChange,handleSubmit} =
        useFormik({
            initialValues,
             registerSchema,
            onSubmit: (values,action) => {
              console.log(values);
              delete values.confirmpassword;
              delete values.role;
              authService.create(values).then((res)=>{
                // navigate("/login");
                console.log(res);
                toast.success("sucessfully registered");
                action.resetForm();
              });
            },
        });

        
      console.log( errors );
    
    return (
        <>
            <Box display="flex" justifyContent="center" marginTop="50px">
                <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcrump-wrapper" >
                    <Link to="/login" title="Home" style={{ textDecoration: "none", color: "#414141" }}>Home</Link>
                    <Typography color="#f14d54">Create an Account</Typography>
                </Breadcrumbs>
            </Box>
            <Container maxWidth="lg">
      <form onSubmit={handleSubmit}>
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
          <Box>
            <Typography variant="h6" marginTop="50px" gutterBottom style={{ fontWeight: 600 }}>
              Personal Information
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom color="grey">
              Please enter your information to create your account.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  First Name *
                </Typography>
                <TextField
                  type="text"
                  size="small"
                  fullWidth
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helpertext ={errors.firstName && touched.firstName ? errors.firstName :null}
                  error={errors.firstName && touched.firstName}
                />
              
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  Last Name *
                </Typography>
                <TextField
                  type="text"
                  size="small"
                  fullWidth
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.lastName && touched.lastName ? errors.lastName :null}
                  error={errors.lastName && touched.lastName}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  Email Address *
                </Typography>
                <TextField
                  type="email"
                  size="small"
                  fullWidth
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.email && touched.email ? errors.email :null}
                  error={errors.email && touched.email}
                />
              </Grid>
              <Grid item xs={6} >
                <Typography variant="body1" gutterBottom>
                  Role *
                </Typography>
                <Select
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="role"
                  size="small"
                  helperText={errors.role && touched.role ? errors.role :null}
                  error={errors.role && touched.role}
                  fullWidth
                 displayEmpty
                >
                  <MenuItem value="Buyer" defaultChecked>Buyer</MenuItem>
                  <MenuItem value="Seller">Seller</MenuItem>
                </Select>
                {errors.role && touched.role ? (
                      <p className="form-error">{errors.role}</p>
                    ) : null}
                
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
              Login Information
            </Typography>
            <hr />

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  Password *
                </Typography>
                <TextField
                  type="password"
                  size="small"
                  fullWidth
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.password && touched.password ? errors.password :null}
                  error={errors.password && touched.password}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  Confirm Password *
                </Typography>
                <TextField
                  type="password"
                  size="small"
                  fullWidth
                  name="confirmpassword"
                  value={values.confirmpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.confirmpassword && touched.confirmpassword ? errors.confirmpassword :null}
                  error={errors.confirmpassword && touched.confirmpassword}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Button
              type="submit"
              variant="contained"
              color="error"
              sx={{ textTransform: "capitalize", backgroundColor: "#f14d54" }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
        </>
    );
}

export default Register;