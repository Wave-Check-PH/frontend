import React from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { Button, TextField, Typography } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref as dbRef, set } from 'firebase/database';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface ProfileData {
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
}

interface FormValues {
  firstName: string;
  lastName: string;
  profilePicture: File | null;
}

const ProfileForm: React.FC = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  const handleSubmit = async (values: FormValues) => {
    try {
      if (user) {
        const userId = user.uid;
        const db = getDatabase();
        const profileRef = dbRef(db, 'profile/' + userId);

        // Upload the profile picture to Firebase Storage
        const storage = getStorage();
        const storageRef = ref(storage, 'profile_pictures/' + userId);
        if (values.profilePicture) {
          await uploadBytes(storageRef, values.profilePicture);
          const profilePictureUrl = await storageRef.fullPath;

          // Save the profile data to the Firebase Realtime Database
          const profileData: ProfileData = {
            firstName: values.firstName,
            lastName: values.lastName,
            profilePictureUrl,
          };
          await set(profileRef, profileData);
          console.log('Profile data saved successfully!');
        } else {
          console.log('No profile picture selected.');
        }
      } else {
        console.log('User not logged in.');
      }
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        profilePicture: null,
      }}
      validate={(values: FormValues) => {
        const errors: Partial<FormValues> = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        }
        if (!values.lastName) {
          errors.lastName = 'Required';
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <Typography variant="h5" component="h2" gutterBottom>
            Profile Form
          </Typography>
          <Field
            as={TextField}
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <ErrorMessage name="firstName" component="div" />
          <Field
            as={TextField}
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="lastName"
          />
          <ErrorMessage name="lastName" component="div" />
          <Button variant="contained" component="label">
            Upload Profile Picture
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) =>
                setFieldValue('profilePicture', e.target.files?.[0] || null)
              }
            />
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
          >
            Save Profile
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;