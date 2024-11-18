import React, { useContext } from "react";
import UserContext from "../Store/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div>Profile: {user && user.username ? user.username : "Guest"}</div>
      <div>Password: {user && user.password ? user.password : "Guest"}</div>
    </>
  );
}
