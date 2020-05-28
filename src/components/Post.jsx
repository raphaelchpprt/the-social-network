import React, { useEffect } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux";

import Like from "./Like";
import DeleteIcon from "./DeleteIcon";

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
            posts.map((e) =>
              e.text ? (
                <div className="post" key={e.id}>
                  {loggedIn ? (
                    e.user && e.user.id ? (
                      <>
                        <b>
                          <Link
                            to={{
                              pathname: `/user/${e.user.username
                                .replace(/\s/g, "-")
                                .toLowerCase()}`,
                              state: { userId: e.user.id },
                            }}
                          >
                            {e.user.username} :
                          </Link>
                        </b>
                        <Route path="/user/:username" />
                      </>
                    ) : (
                      <b>Anonymous :</b>
                    )
                  ) : null}{" "}
                  {e.text}{" "}
                  {loggedIn ? (
                    <>
                      {" "}
                      - <Like post={e} />
                    </>
                  ) : null}
                  {e.user && loggedIn && e.user.id == currentUser.id ? (
                    <>
                      {" "}
                      <DeleteIcon postId={e.id} />
                    </>
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
