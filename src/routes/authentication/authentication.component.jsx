import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignINForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div>
      {/* Put the page title here, outside the flex container */}
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Sign In / Sign Up</h1>
      <div className='auth-container'>
        <SignUpForm />
        <SignINForm />
      </div>
    </div>
  );
}


export default Authentication;