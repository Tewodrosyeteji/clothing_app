import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./SignInForm.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { signinWithGoogle, signinWithEmail } from "../../store/user/userAction";
import { useDispatch } from "react-redux";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const logInUser = async () => {
    dispatch(signinWithGoogle());
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch(signinWithEmail);
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("wrong password");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Alread have an account</h2>
      <span> Singn in using Email and Password or Google</span>
      <form onSubmit={submitHandler}>
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
        <div className="buttons-container">
          <Button type="submit">sing in </Button>
          <br />
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logInUser}
          >
            Google sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
