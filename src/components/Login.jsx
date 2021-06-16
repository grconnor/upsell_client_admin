import React from 'react';
import LoginForm from "./LoginForm";
import auth from "../modules/auth";

const Login = (props) => {

  const login = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.children.email.value
      const password = e.target.children.password.value
      const response = await auth.signIn(email, password)
      props.authenticate(response.success)
    } catch(error) {
      console.log(error.response.data)
    }
  }

  return (
    <LoginForm
      login={login}
    />
  )
}

export default Login;
