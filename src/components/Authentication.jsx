import React from 'react';
import LoginForm from "./LoginForm";
import auth from "../modules/auth";

const Authentication = (props) => {

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.children.email.value
    const password = e.target.children.password.value
    const response = await auth.signIn(email, password)

    if (response.success) {
      props.authenticate(response.success)
    } else {
      console.log(response)
    }
  }

  return (
    <LoginForm
      login={login}
    />
  )
}

export default Authentication;
