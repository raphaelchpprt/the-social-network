import React, { useState, useEffect } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Cookies from "js-cookie";

const Like = ({ post }) => {
  const [likes, setLikes] = useState(post.like);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    fetch(`https://api-minireseausocial.mathis-dyk.fr/posts/${post.id}`, {
      method: "put",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like: likes + 1 }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          console.log(response);
          setLiked(true);
          setLikes(likes + 1);
        }
      });
  };

  const handleUnlike = () => {
    fetch(`https://api-minireseausocial.mathis-dyk.fr/posts/${post.id}`, {
      method: "put",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like: likes - 1 }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          console.log(response);
          setLiked(false);
          setLikes(likes - 1);
        }
      });
  };

  return (
    <b>
      {likes == null ? <>0</> : likes}{" "}
      {liked ? (
        <BsHeartFill onClick={handleUnlike} style={{ cursor: "pointer" }} />
      ) : (
        <BsHeart onClick={handleLike} style={{ cursor: "pointer" }} />
      )}
    </b>
  );
};

export default Like;
