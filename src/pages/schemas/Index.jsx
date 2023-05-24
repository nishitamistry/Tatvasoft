import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fname: Yup.string().min(2).max(25).required("Please enter your First Name"),
  lname: Yup.string().min(2).max(25).required("Please enter your Last Name"),
  email: Yup.string().email().required("Please enter your Email"),
  password: Yup.string().min(6).required("Please enter your Password"),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});