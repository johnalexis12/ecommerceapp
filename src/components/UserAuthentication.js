import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function UserAuthentication() {
  const { user, setUser } = useContext(AuthContext);

  const handleLogin = () => {
    setUser({ username: "user123" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <p>
          Welcome, {user.username}!{" "}
          <button onClick={handleLogout}>Logout</button>
        </p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default UserAuthentication;
