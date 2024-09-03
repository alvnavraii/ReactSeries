import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "./api/posts";

function PostPage({ posts = [], setPosts }) {
  const { id } = useParams();

  const post = posts.find((post) => Number(post.id) === Number(id));

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      navigate("/");
    } catch (err) {
      console.log("There was an error");
      console.log(err.message);
    }
  };

  return (
    <main className="PostPage">
      <article className="post"></article>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p className="postDate">{post.datetime}</p>
          <p className="postBody">{post.body}</p>
          <Link to={`/edit/${post.id}`}>
            <button className="editButton">Edit Post</button>
          </Link>
          <button
            className="deleteButton"
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
        </>
      )}
      {!post && (
        <>
          <h2>Post not found!</h2>
          <p>
            <Link to="/">Return to Home</Link>
          </p>
        </>
      )}
    </main>
  );
}
export default PostPage;
