import React from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { deletePost } from "../redux";

import { RiDeleteBin2Line } from "react-icons/ri";

const DeletePost = ({ postId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const url = `https://api-minireseausocial.mathis-dyk.fr/posts/${postId}`;
    fetch(url, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          dispatch(deletePost(postId));
        }
      });
  };

  return (
    <RiDeleteBin2Line
      onClick={handleClick}
      style={{ cursor: "pointer", color: "red", fontWeight: "900" }}
    />
  );
};

export default DeletePost;
