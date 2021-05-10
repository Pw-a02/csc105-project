import React, { useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";
import axios from "axios";

const Signin = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.isLogin) {
          console.log(response.data);
        } else if (!response.data.isSignup) {
          console.log(response.data);
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Home</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" onChange={emailChange} required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" onChange={passwordChange} required />
              <FormButton type="submit" onChange={handleSubmit}>
                Continue
              </FormButton>
              <Text>
                Forgot password or <a href="/signup">Sign Up now</a>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
