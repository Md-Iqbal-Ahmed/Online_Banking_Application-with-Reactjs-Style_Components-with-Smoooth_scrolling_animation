import React from "react";
import {
  Container,
  FromWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SignInElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FromWrap>
          <Icon to="/">Wallet</Icon>
          <FormContent>
            <Form>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton htmlFor="for">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FromWrap>
      </Container>
    </>
  );
};

export default SignIn;
