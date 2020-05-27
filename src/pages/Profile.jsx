import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import Post from "../components/Post";

const Profile = () => {
  const [user, setUser] = useState();
  const [userModification, setUserModification] = useState({
    username: "",
    description: "",
  });

  useEffect(() => {
    fetch("https://api-minireseausocial.mathis-dyk.fr/users/me", {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserModification((userModification) => ({
      ...userModification,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchModif(userModification);
  };

  const fetchModif = (userModification) => {
    fetch(`https://api-minireseausocial.mathis-dyk.fr/users/${user.id}`, {
      method: "put",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userModification),
    })
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="profile">
      <h1>My profile</h1>
      {user ? (
        <>
          <div className="information">
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <p>{user.description}</p>
          </div>
          <h4>Modifier son profil : </h4>
          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={userModification.username}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="description"
              name="description"
              value={userModification.description}
              onChange={handleChange}
            />
            <input type="submit" />
          </form>
          <h2>Mes posts</h2>
          <Post
            url={`https://api-minireseausocial.mathis-dyk.fr/posts?user.id=${user.id}`}
          />
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Profile;
