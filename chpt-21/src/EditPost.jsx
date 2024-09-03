import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import api from "./api/posts"; // Import the 'api' module or define it if it's not imported from an external source
import { format } from "date-fns"; // Import the 'format' function from the 'date-fns' module

/*;*/

function EditPost() {
  const { posts, editTitle, setEditTitle, editBody, setEditBody, setPosts } =
    useContext(DataContext);
  const handleEdit = async (id) => {
    const updatedPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title: editTitle,
      datetime: format(new Date(), "MMMM dd, yyyy pp"),
      body: editBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      const allPosts = response.data;
      setPosts(posts.map((post) => (post.id === id ? allPosts : post)));
      setEditTitle("");
      setEditBody("");
    } catch (err) {
      console.log("There was an error");
      console.log(err.message);
    }
  };
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
