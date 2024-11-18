import React, { useContext } from "react";
import userContext from "../Context";

export default function Profile() {
  const { user } = useContext(userContext);
  return <div>profile: {user.name}</div>;
}
