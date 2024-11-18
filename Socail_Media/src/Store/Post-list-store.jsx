import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";

// Create the context
export const PostListContext = createContext({
  postList: [],
  delPost: () => {},
  addPost: () => {},
  increment: () => {},
  isLoading: false,
});

// Reducer function to manage the post list
const PostListReducer = (currPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currPostList];
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload);
    case "INCREMENT_LIKES":
      return currPostList.map((post) =>
        post.id === action.payload ? { ...post, likes: post.likes + 1 } : post
      );
    case "ADD_INITIAL_POST":
      return [...action.payload, ...currPostList]; // Correctly spreading the posts
    default:
      return currPostList;
  }
};

// Context provider
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);
  const [isLoading, setIsLoading] = useState(false);

  const delPost = (id) => {
    dispatchPostList({ type: "DELETE_POST", payload: id });
  };

  const addPost = (post) => {
    dispatchPostList({ type: "ADD_POST", payload: post });
  };

  const addPostFromServer = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: posts,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addPostFromServer(data.posts);
        setIsLoading(false); // Add fetched posts to the state
      })
      .catch((err) => console.error("Error fetching posts:", err));

    return () => {
      console.log("Cleaning up");
      controller.abort();
    };
  }, []);

  const increment = (id) => {
    dispatchPostList({ type: "INCREMENT_LIKES", payload: id });
  };

  return (
    <PostListContext.Provider
      value={{ postList, delPost, addPost, increment, isLoading }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
