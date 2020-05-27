import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import Post from "../components/Post";

const User = (props) => {
  const userId = props.location.state.userId;
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://api-minireseausocial.mathis-dyk.fr/users/${userId}`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      });
  }, []);

  return (
    <div className="profile">
      <h1>Profile</h1>
      {user ? (
        <>
          <div className="information">
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <p>{user.description}</p>
          </div>
          <div className="posts-container">
            <h2>Les posts de {user.username}</h2>
            <Post
              url={`https://api-minireseausocial.mathis-dyk.fr/posts?user.id=${user.id}`}
            />
          </div>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default User;
