import React, { useState } from 'react';
import Authentication from "./components/Authentication";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div>
      { authenticated ? (
        <p>Hello Admin</p>
      ) : (
        <Authentication
          authenticate={(success) => setAuthenticated(success)}
        />
      )}
    </div>
  )
}

export default App
