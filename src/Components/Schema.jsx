import * as yup from "yup";

const loginSchema = yup.object().shape({
  Username: yup
    .string()
    .min(8)
    .max(15)
    .matches(
      /^[a-zA-Z0-9_@]+$/,
      'Valid Inputs are charecter number and ("_","@")'
    )
    .required(),
  Password: yup.string().min(6).max(15).required(),
});

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .min(10)
    .max(25)
    .matches(
      /^[a-zA-Z0-9_@]+$/,
      'Valid Inputs are charecter number and ("_","@")'
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8)
    .max(15)
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+$/,
      "Password must contain atleast one speacial charecter, digit and a capital letter"
    ),
  confirmpassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords doesn't match"),
  address: yup
    .string()
    .required()
    .min(10)
    .max(50)
    .matches(
      /^[a-zA-Z0-9\s,'-:/]+$/,
      "Only alphabets and special charecters like ':-/ are allowed"
    ),
  city: yup
    .string()
    .required()
    .min(4)
    .max(20)
    .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed"),
  code: yup
    .string()
    .required()
    .min(7)
    .max(7)
    .matches(/^[0-9]+$/, "Must be only digits"),
});

const addressSchema = yup.object().shape({
  Address: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Z0-9\s,'-:/]+$/,
      "Only allowed Special Charecters are /,:-"
    ),
});

export { loginSchema, registerSchema,addressSchema };
