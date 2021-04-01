import React, { useEffect, useState } from "react";
import AuthContext from "./authContext";

import { firebase } from "../firebase";

function AuthState(props) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
