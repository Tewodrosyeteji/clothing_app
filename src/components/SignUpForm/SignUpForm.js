import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import "./SignUpForm.scss";
import Button from "../Button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("email is exist");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up form</h2>
      <form onSubmit={submitHandler}>
        <FormInput
          label="displayName"
          required
          type=""
          onChange={changeHandler}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          required
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="password"
          required
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
        />

        <FormInput
          label="confirmPassword"
          required
          type="password"
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">singnUp</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
