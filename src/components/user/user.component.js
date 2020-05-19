import React, { useState, useEffect } from "react";
import Card from "../card.component";

const User = ({ userId }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/?id=${userId}`
      );
      const resjson = await res.json();
      setUser(resjson[0]);
    };
    fetchUser();
  });

  return (
    <Card>
      {user ? (
        <div>
          <h1>{user.username}</h1>
          <h2>{user.name}</h2>
        </div>
      ) : (
        <p> User not found</p>
      )}
    </Card>
  );
};

export default User;
