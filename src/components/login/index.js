import React from "react";

import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Grid, Button } from "@material-ui/core";
import FormikTextField from "../../modules/Formik/TextField";
import FormikPasswordField from "../../modules/Formik/PasswordField";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required("Required")
    .max(120, "Maximum length is 120 characters")
    .email("Invalid email"),
  password: Yup.string(),
});

const Login = ({ onLogin }) => (
  <Formik validationSchema={loginSchema} onSubmit={onLogin}>
    <Form autoComplete="off">
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Field
            color="secondary"
            name="email"
            label="Email"
            type="email"
            component={FormikTextField}
            required
          />
        </Grid>
        <Grid item>
          <Field
            color="secondary"
            name="password"
            label="Password"
            type="password"
            component={FormikPasswordField}
            required
          />
        </Grid>
        <Grid item>
          <Button fullWidth variant="contained" color="primary" type="submit">
            Sign In
          </Button>
        </Grid>
      </Grid>
    </Form>
  </Formik>
);

export default Login;
