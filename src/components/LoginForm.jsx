import React from 'react'

const LoginForm = (props, login) => {
  return (
    <form onSubmit={props.login}>
      <input placeholder="email" id="email"/>
      <input placeholder="password" id="password" type="password" />
      <button>Login</button>
    </form>
  )
}

export default LoginForm;
