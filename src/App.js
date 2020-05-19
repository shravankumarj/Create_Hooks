import React from "react";
import "./styles.css";
import User from "./components/user/user.component";
import Profile from "./components/profile/profile.component";

export default function App() {
  return (
    <div className="App">
      <User userId={5} />
      <Profile profileId={5} />
    </div>
  );
}
