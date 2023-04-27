import { useState, ChangeEvent, FormEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import FormInput from "../FormInput/FormInput.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import { signinWithGoogle, signinWithEmail } from "../../store/user/userAction";
import { useDispatch } from "react-redux";
import { SignInContainer, ButtonsContainer } from "./SignInForm.style";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const logInUser = async () => {
    dispatch(signinWithGoogle());
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(signinWithEmail(email, password));
      resetFormFields();
    } catch (err) {
      console.log("user sign in failed", err);
      // if (err.code === "auth/wrong-password") {
      //   alert("wrong password");
      // } else {
      //   console.log(err);
      // }
    }
  };

  return (
    <SignInContainer>
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
        <ButtonsContainer>
          <Button type="submit">sing in </Button>
          <br />
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logInUser}
          >
            Google sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
