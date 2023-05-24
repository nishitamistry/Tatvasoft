import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
};

// const [roleList, setRoleList] = useState([]);
//     const formik = useFormik()
//     useEffect(() => {
//         if (roleList.length) return;
//         getRoles();
//     }, [roleList]);

//     const getRoles = () => {
//         userService.getAllRoles().then((res) => {
//             setRoleList(res);
//         });
//     };

const registerSchema = Yup.object({
  firstname: Yup.string().min(2).max(25).required("please enter your first name"),
  lastname: Yup.string().min(2).max(25).required("please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Pleaase enter password with min 6 char"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

// const onSubmit = (data) => {
//   alert(JSON.stringify(data))
//   delete data.confirmPassworrd;
// };

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:registerSchema,
    onSubmit: (values) => {
      console.log("form vals", values);
      alert("Successfull");
    },
  });


  return (
    <>
    <Header />
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
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
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
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.firstname && touched.firstname ? errors.firstname :null}
                  error={errors.firstname && touched.firstname}
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
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.lastname && touched.lastname ? errors.lastname :null}
                  error={errors.lastname && touched.lastname}
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
                  fullWidth
                 displayEmpty
                >
                  <MenuItem value="Buyer" defaultChecked>Buyer</MenuItem>
                  <MenuItem value="Seller">Seller</MenuItem>
                </Select>
                
                
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
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword :null}
                  error={errors.confirmPassword && touched.confirmPassword}
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
    <Footer />
    </>
  );
};

export default Registration;