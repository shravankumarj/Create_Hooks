import React, { useState, useEffect } from "react";
import Card from "../card.component";
const Profile = ({ profileId }) => {
  const [profile, setProfile] = useState(null);
  console.log(`https://jsonplaceholder.typicode.com/posts/?id=${profileId}`);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/?id=${profileId}`
      );
      const restjson = await res.json();
      setProfile(restjson[0]);
    };
    fetchPost();
  });

  return (
    <Card>
      {profile ? (
        <div>
          <h1> {profile.title}</h1>
          <h2>{profile.body}</h2>
        </div>
      ) : (
        <p>Profile not found</p>
      )}
    </Card>
  );
};

export default Profile;
