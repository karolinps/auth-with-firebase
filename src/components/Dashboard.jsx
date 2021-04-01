import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/authContext";
import { withRouter } from "react-router-dom";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState();

  useEffect(() => {
    user ? setName(user.displayName) : setName("");
  }, []);
  return (
    <>
      <h1>Bienvenido {name}</h1>
    </>
  );
}

export default withRouter(Dashboard);
