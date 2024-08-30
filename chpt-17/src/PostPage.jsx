import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PostPage({ posts = [], setPosts }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  const navigate = useNavigate();

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
    navigate("/");
  };

  return (
    <main className="PostPage">
      <article className="post"></article>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p className="postDate">{post.datetime}</p>
          <p className="postBody">{post.body}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
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
