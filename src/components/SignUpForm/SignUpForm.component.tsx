import { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "../FormInput/FormInput.component";
import { SignUpContainer } from "./SignUpForm.style";
import Button from "../Button/Button.component";
import { useDispatch } from "react-redux";
import { signupStart } from "../../store/user/userAction";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      dispatch(signupStart(email, password, displayName));
      resetFormFields();
    } catch (err) {
      if ((err as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("email is exist");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account</h2>
      <span> sign up with emai and password</span>
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
    </SignUpContainer>
  );
};

export default SignUpForm;
