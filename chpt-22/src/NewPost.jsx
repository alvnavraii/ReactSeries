import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

function NewPost() {
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);
  const posts = useStoreState((state) => state.posts);
  const savePost = useStoreActions((actions) => actions.savePost);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title: postTitle,
      datetime: format(new Date(), "MMMM dd, yyyy pp"),
      body: postBody,
    };
    savePost(newPost);
    navigate("/");
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
