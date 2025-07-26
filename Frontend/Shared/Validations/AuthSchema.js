import * as yup from "yup";

//SIGNUP SCHEMA:
const signupSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  email: yup.string().email("Invalid Email").required("Email is Required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Must be atleast 6 characters")
    .matches(/[A-Z]/, "Must include a capital letter")
    .matches(/[a-z]/, "Must include a small letter")
    .matches(/\d/, "Must include a number"),
});

//LOGIN SCHEMA:
const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export { signupSchema, loginSchema };
