import React, { useState, useEffect } from 'react';
import Login from "./components/Login";
import auth from './modules/auth';
import CreateProduct from "./components/CreateProduct";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // componentDidMount = () => {

  // }
  useEffect(() => {
    const persistLogin = async () => {
      if (localStorage.getItem("J-tockAuth-Storage")) {
        let credentials = JSON.parse(localStorage.getItem("J-tockAuth-Storage"))
        const response = await auth.validateToken(credentials)
  
        if (response.success) {
          setAuthenticated(true)
        } else {
          console.log(response)
        }
      }
    }

    persistLogin()
  }, [])

  return (
    <div>
      { authenticated ? (
        <CreateProduct />
      ) : (
        <Login
          authenticate={(success) => setAuthenticated(success)}
        />
      )}
    </div>
  )
}

export default App;