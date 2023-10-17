import React from "react";
import { useAuth } from "../context/AuthContext";

function UserAuthentication() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <h2>User Authentication</h2>
      {user ? (
        <p>
          Welcome, {user.username}! <button onClick={logout}>Logout</button>
        </p>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default UserAuthentication;
