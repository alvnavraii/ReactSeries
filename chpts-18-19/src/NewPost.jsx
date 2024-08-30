import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import api from "./api/posts"; // Import the 'api' module or define it if it's not imported from an external source

function NewPost({
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
  posts,
  setPosts,
}) {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title: postTitle,
      datetime: format(new Date(), "MMMM dd, yyyy pp"),
      body: postBody,
    };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = response.data;
      setPosts([...posts, allPosts]);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log("There was an error");
      console.log(err.message);
    }
  };
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          value={postTitle}
          onChange={(e) => {
            setPostTitle(e.target.value);
          }}
          required
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
export default NewPost;
