import Feed from "./Feed";

function Home({ posts, fetchError, isLoading }) {
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading...</p>}
      {fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {posts.length === 0 && !isLoading && !fetchError && (
        <p className="statusMsg">No posts found.</p>
      )}
      {posts.length > 0 && <Feed posts={posts} />}
    </main>
  );
}

export default Home;
