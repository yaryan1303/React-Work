import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, delPost, increment, isLoading } =
    useContext(PostListContext);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && postList.length === 0 && <WelcomeMsg />}
      {!isLoading && postList.length > 0
        ? postList.map((post) => (
            <Post
              key={post.id}
              post={post}
              delPost={delPost}
              increment={increment}
            />
          ))
        : ""}
    </>
  );
};

export default PostList;
