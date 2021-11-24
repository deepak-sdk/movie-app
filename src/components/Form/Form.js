import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import "./Form.css";
import * as yup from "yup";

// const validateForm = (values) => {
//   const errors = {};
//   console.log("validateForm", values);

//   if (values.email.length < 5) {
//     errors.email = "Provide valid email";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email adddress";
//   }

//   if (values.password.length < 8) {
//     errors.password = "Please provide longer password";
//   } else if (values.password.length > 12) {
//     errors.password = "Please provide shorter password";
//   }
//   console.log(errors);
//   return errors;
// };

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "Email must be atleast 5 character")
    .required("Required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not much"),
  password: yup.string().min(8).max(12).required("Required"),
});

export const Form = () => {
  // destructuring handleSubmit, values, handleChange, handleBlur, errors, touched;
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      // validate: validateForm,
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("onsubmit", values);
      },
    });
  //   return (
  //     <div className="App">
  //       <form onSubmit={formik.handleSubmit}>
  //         <input
  //           id="email"
  //           name="email"
  //           value={formik.values.email}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           type="email"
  //           placeholder="Enter your Email"
  //         />
  //         {formik.errors.email && formik.touched.email && formik.errors.email}
  //         <input
  //           id="password"
  //           name="password"
  //           value={formik.values.password}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           type="password"
  //           placeholder="Enter your Password"
  //         />
  //         {formik.errors.password &&
  //           formik.touched.password &&
  //           formik.errors.password}
  //         <button type="submit">Submit</button>
  //       </form>
  //     </div>
  //   );
  // }

  return (
    <div>
      <form onSubmit={handleSubmit} className="basic-form">
        <TextField
          variant="outlined"
          label="Enter your Email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
        />
        {errors.email && touched.email && errors.email}
        <TextField
          variant="outlined"
          label="Enter your Password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
        />
        {errors.password && touched.password && errors.password}
        <Button variant="outlined" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
