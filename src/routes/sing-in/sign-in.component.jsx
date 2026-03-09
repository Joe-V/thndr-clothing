import {signInWithGooglePopup , createUserDocumentFromAuth} from "../../utils/Firebase/firebase.utils.js" ;

const SignIN = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup(); 
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  }

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </>
  );
}

export default SignIN;