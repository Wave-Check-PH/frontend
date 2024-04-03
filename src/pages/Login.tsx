import React, { useState } from 'react';
import { Button, Typography, TextField, CircularProgress } from '@mui/material';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import "./Login.scss";import { useLocation, useNavigate } from 'react-router-dom';
;
interface FormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const auth = getAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const entryLinkBeforeLogin = location.state?.from?.pathname || '/';

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
       navigate(entryLinkBeforeLogin, { replace: true });
    } catch (error) {
      let errorMessage = 'Wrong login credentials. Please try again.';
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
    <div className='login-create-account-container'>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values: FormValues) => {
            const errors: Partial<FormValues> = {};
            if (!values.password) {
              errors.password = 'Required';
            } else if (values.password.length < 8) {
              errors.password = 'Password must be at least 8 characters long';
            }
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
          
          {({ isSubmitting }) => !isSubmitting ? (
            <>
            <Typography variant="h4" align="center" gutterBottom>
          {isSignUp ? 'Create Account' : 'Login'}
        </Typography>
        {errorMessage && (
          <Typography variant="body1" color="error" align="center" gutterBottom>
            {errorMessage}
          </Typography>
        )}
            <Form className='login-form'>
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
              <br/>

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
            </Form></>
          ) : <CircularProgress />}
        </Formik>
    </div>
  );
};

export default LoginPage;