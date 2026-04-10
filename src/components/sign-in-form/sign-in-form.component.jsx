import { useState } from "react";
import { 
  signInWithGooglePopup, 
  signINAuthUserWithEmailAndPassword 
} from "../../utils/Firebase/firebase.utils.js";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// Import our new styled components
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: '',
  password: ''
};

const signINGoogleUser = async () => {
  await signInWithGooglePopup();
};

const SignINForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const clearForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signINAuthUserWithEmailAndPassword(email, password);
      clearForm();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('wrong password');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this Email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: 'email',
            required: true,
            onChange: handleChange,
            name: "email",
            value: email
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: "password",
            value: password
          }}
        />
        
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button 
            type="button" 
            buttonType='google' 
            onClick={signINGoogleUser}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignINForm;