import Post from "./Post";

function Feed({ posts }) {
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
export default Feed;
