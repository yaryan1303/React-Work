import { MdDelete } from "react-icons/md";

const Post = ({ post, delPost, increment }) => {
  return (
    <div
      className="card mb-4 shadow-lg border-0"
      style={{
        width: "100%",
        maxWidth: "22rem",
        borderRadius: "15px",
        overflow: "hidden",
        transition: "transform 0.3s",
        margin: "1rem",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div
        className="card-header text-white d-flex align-items-center justify-content-between"
        style={{
          background: "linear-gradient(45deg, #6a11cb, #2575fc)",
          padding: "1rem",
        }}
      >
        <h5 className="mb-0 text-center" style={{ flexGrow: 1 }}>
          {post.title}
        </h5>
        <MdDelete
          onClick={() => delPost(post.id)}
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            color: "#fff",
            marginLeft: "10px",
          }}
        />
      </div>
      <div className="card-body text-center">
        <p className="card-text text-muted mb-4">{post.body}</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span
            className="badge bg-success px-3 py-2"
            style={{ fontSize: "0.9rem", cursor: "pointer" }}
            onClick={() => increment(post.id)} // Fix: Use a callback
          >
            <i className="bi bi-hand-thumbs-up me-1"></i> {post.likes}{" "}
            Likes
          </span>
          <span
            className="badge bg-info px-3 py-2"
            style={{ fontSize: "0.9rem" }}
          >
            <i className="bi bi-chat-dots me-1"></i> {post.views} Comments
          </span>
        </div>
        <p className="mb-0">
          <strong>By:</strong>{" "}
          <span style={{ color: "#6a11cb" }}>{post.userId}</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
