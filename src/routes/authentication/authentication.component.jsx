import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

// Import the styled components
import { 
  AuthenticationContainer, 
  AuthenticationTitle 
} from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <div>
      <AuthenticationTitle>Sign In / Sign Up</AuthenticationTitle>
      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
    </div>
  );
};

export default Authentication;