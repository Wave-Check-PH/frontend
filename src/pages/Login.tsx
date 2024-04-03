import React, { useState, useRef } from 'react';
import { Button, Grid, Typography, TextField } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

interface FormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const auth = getAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
      } else {
        await signInWithEmailAndPassword(auth, values.email, values.password);
      }
      // Redirect to the desired page after successful login or signup
    } catch (error) {
      let errorMessage = 'An unknown error occurred.';
      console.log(error);
      if (error instanceof Error) {
        switch (error.message) {
          // ... (error handling code remains the same)
        }
      }
      setErrorMessage(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" align="center" gutterBottom>
          {isSignUp ? 'Create Account' : 'Login'}
        </Typography>
        {errorMessage && (
          <Typography variant="body1" color="error" align="center" gutterBottom>
            {errorMessage}
          </Typography>
        )}
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values: FormValues) => {
            const errors: Partial<FormValues> = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="email"
                name="email"
                as={TextField}
                label="Email"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="email" component="div" />
              <Field
                type="password"
                name="password"
                as={TextField}
                label="Password"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="password" component="div" />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
              >
                {isSignUp ? 'Sign Up' : 'Login'}
              </Button>
              <Button
                onClick={() => setIsSignUp(!isSignUp)}
                color="secondary"
                fullWidth
                style={{ marginTop: '10px' }}
              >
                {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default LoginPage;