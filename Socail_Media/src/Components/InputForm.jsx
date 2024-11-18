import { useContext, useRef } from "react";
import { PostListContext } from "../Store/Post-list-store";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const { addPost } = useContext(PostListContext);
  const navigate = useNavigate();

  const titleRef = useRef();
  const contentRef = useRef();
  const userRef = useRef();
  const likesRef = useRef();
  const commentsRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const user = userRef.current.value;
    const likes = parseInt(likesRef.current.value || "0", 10);
    const comments = parseInt(commentsRef.current.value || "0", 10);

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: content,
        reactions: comments,
        views: likes,
        userId: user,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Add post to context
        addPost({
          id: data.id,
          title: data.title,
          body: data.body,
          reactions: data.likes,
          views: data.views,
          userId: data.userId,
        });
        navigate("/");
      })
      .catch((err) => console.error("Error posting data:", err));

    // Clear the form
    titleRef.current.value = "";
    contentRef.current.value = "";
    userRef.current.value = "";
    likesRef.current.value = "";
    commentsRef.current.value = "";
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: "#007bff" }}>
        Add a New Post
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={titleRef}
            placeholder="Enter post title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="5"
            ref={contentRef}
            placeholder="Write your post content here..."
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="user"
            ref={userRef}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="likes" className="form-label">
              Initial Likes
            </label>
            <input
              type="number"
              className="form-control"
              id="likes"
              ref={likesRef}
              placeholder="0"
              min="0"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="comments" className="form-label">
              Initial Comments
            </label>
            <input
              type="number"
              className="form-control"
              id="comments"
              ref={commentsRef}
              placeholder="0"
              min="0"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
