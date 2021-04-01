import React, { useEffect, useState } from "react";
import AuthContext from "./authContext";

import { firebase } from "../firebase";

function AuthState(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
