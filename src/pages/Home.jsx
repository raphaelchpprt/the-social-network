import React from "react";
import Post from "../components/Post";
import PostCreation from "../components/PostCreation";
import { useSelector } from "react-redux";

const Home = () => {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  return (
    <div className="home-container">
      <h1>Welcome on My Social Network.</h1>
      <h4>
        This website is a training to Redux and React. We use auth and routing
        to create a small social media website.
      </h4>
      {loggedIn ? <PostCreation /> : null}
      <h2 id="post-feed-title">Posts feed</h2>
      <Post
        url={`https://api-minireseausocial.mathis-dyk.fr/posts?_limit=5000&_sort=created_at:desc`}
      />
    </div>
  );
};

export default Home;
