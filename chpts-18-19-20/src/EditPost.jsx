import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

/*;*/

function EditPost({
  posts,
  handleEdit,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((post) => Number(post.id) === Number(id));
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              id="postTitle"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
              required
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              required
            />
            <button
              type="submit"
              onClick={() => {
                handleEdit(post.id);
                navigate("/");
              }}
            >
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
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
export default EditPost;
