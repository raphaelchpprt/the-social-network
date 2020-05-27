import React, { useEffect, useState } from "react";
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux";

import User from "../pages/User";
import DeletePost from "./DeletePost";

import "./stylesheets/Post.css";

const Post = (url) => {
  const { posts, loading, loggedIn, currentUser } = useSelector((state) => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
    loggedIn: state.login.loggedIn,
    currentUser: state.login.user,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(url));
  }, []);

  return (
    <div className="posts-container">
      {loading ? (
        <p>...loading</p>
      ) : (
        <>
          {posts.length > 0 ? (
            posts
              .slice(0)
              .reverse()
              .map((e) =>
                e.text ? (
                  <div className="post" key={e.id}>
                    {e.user && e.user.id && loggedIn ? (
                      <>
                        <>
                          <Link
                            to={{
                              pathname: `/user/${e.user.username
                                .replace(/\s/g, "-")
                                .toLowerCase()}`,
                              state: { userId: e.user.id },
                            }}
                          >
                            {e.user.username}
                          </Link>
                        </>
                        <Route path="/user/:username" />
                      </>
                    ) : (
                      <>Anonymous</>
                    )}{" "}
                    : {e.text}{" "}
                    {e.user && loggedIn && e.user.id == currentUser.id ? (
                      <DeletePost postId={e.id} />
                    ) : null}
                  </div>
                ) : null
              )
          ) : (
            <p>Aucun post pour le moment</p>
          )}
        </>
      )}
    </div>
  );
};

export default Post;
