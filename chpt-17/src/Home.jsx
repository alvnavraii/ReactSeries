import Feed from "./Feed";

function Home({ posts }) {
  console.log(posts);
  console.log(posts.length);
  return (
    <main className="Home">
      {posts.length ? <Feed posts={posts} /> : <p>No posts found!</p>}
    </main>
  );
}
export default Home;
