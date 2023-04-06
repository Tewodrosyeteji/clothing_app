import React from "react";
import {
  singnInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SingIn = () => {
  const logInUser = async () => {
    const { user } = await singnInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h2></h2>
      <button onClick={logInUser}> signIn with google</button>
    </div>
  );
};

export default SingIn;
