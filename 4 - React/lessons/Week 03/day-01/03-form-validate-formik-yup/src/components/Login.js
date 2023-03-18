import { useState } from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import * as Yup from "yup";

import { FormTitle } from "./FormTitle";

export const Login = ({ title, onSuccess, onFailure }) => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable loginError and set the default value as false
  const [loginError, setLoginError] = useState(false);

  /**
   * You can pass a custom function to handle form submit in to formik
   * The function will accept an object containing all state variables
   * This function is the function we want formik to execute on submit
   */
  const onSubmit = ({ email, password }) => {
    // email and password is extracted from the formik values object

    // if email or password is falsy
    if (!email || !password) {
      // set error with a message to trigger a re-render
      setLoginError("Please enter an email and password");

      // execute the function passed by the App to handle failure
      onFailure();
    }
    // if email and password both match the expected values
    else if (email === "bob.smith@email.com" && password === "Password123!") {
      // reset error message to remove any previous error
      setLoginError("");

      // execute the function passed by the App to handle success
      onSuccess();
    }
    // if email and password exists but don't match
    else {
      // set error with a message to trigger a re-render
      setLoginError("Invalid credentials, please try again.");

      // execute the function passed by the App to handle failure
      onFailure();
    }
  };

  const initialValues = {
    // inform formik to track email as a formik state with default value of ""
    email: "",
    // inform formik to track password as a formik state with default value of ""
    password: "",
  };

  const validationSchema = Yup.object({
    // password is required and should be a minimum of 8 characters long
    password: Yup.string()
      .min(8, "Password should be minimum of 8 characters long.")
      .required("Password is required."),
    // email is required and should match the type of email
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email address is required."),
  });

  /**
   * Use the hook from formik to get an instance of formik for your form
   * The formik hook accepts an object with initialValues and onSubmit
   * The initialValues is an object with the state variables and their default values
   * The onSubmit is a function to execute when the form is submitted
   */
  const formik = useFormik({
    // provide the initial values of the form
    initialValues,
    // provide a validation schema using Yup
    validationSchema,
    // inform formik to use the above onSubmit function when form is submitted
    onSubmit,
  });

  return (
    <Container className="border rounded p-4 text-light">
      {/* conditionally render the FormTitle component if the title prop exists */}
      {title && <FormTitle title={title} />}

      <Form className="p-5" onSubmit={formik.handleSubmit}>
        {/* Stack containing all the form elements */}
        <Stack gap={5}>
          {/* Stack containing the form elements */}
          <Stack gap={3}>
            {/* email address form input */}
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {/* text that will appear if email is not filled in on submit */}
              {formik.touched.email && formik.errors.email && (
                <Form.Text className="text-danger">
                  {formik.errors.email}
                </Form.Text>
              )}
            </Form.Group>

            {/* password form input */}
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {/* text that will appear if password is not filled in on submit */}
              {formik.touched.password && formik.errors.password && (
                <Form.Text className="text-danger">
                  {formik.errors.password}
                </Form.Text>
              )}
            </Form.Group>
          </Stack>

          {/* Stack containing the submit button  */}
          <Stack className="d-grid gap-2 col-6 mx-auto">
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Stack>
        </Stack>
        {loginError && (
          <div className="text-center pt-4 text-danger">
            Failed to login. Please try again.
          </div>
        )}
      </Form>
    </Container>
  );
};
