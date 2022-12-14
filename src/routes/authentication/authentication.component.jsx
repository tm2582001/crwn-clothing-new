import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;


// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

//   auth,
//   signInWithGoogleRedirect,

//   useEffect(()=>{
//     const logGoogleRedirectUser = async()=>{
//         const response = await getRedirectResult(auth);
//         if(response){
//             const userDocRef = await createUserDocumentFromAuth(response.user);
//         }

//     }

//     logGoogleRedirectUser();
//   },[]);

/* <button onClick={signInWithGoogleRedirect}>
  Sign in with Google redirect
</button> */
