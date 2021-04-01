import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/authContext";

function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const [name, setName] = useState(null);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    currentUser ? setName(currentUser.displayName) : setName("");
    currentUser ? setAvatar(currentUser.photoURL) : setAvatar("");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h1>Bienvenido {name}</h1>
      <img
        src={avatar}
        alt="avatar"
        style={{ width: 100, borderRadius: "50%" }}
      />
    </div>
  );
}

export default Dashboard;
