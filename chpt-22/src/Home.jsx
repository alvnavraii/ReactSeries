import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

function Home() {
  const fetchError = useStoreState((state) => state.fetchError);
  const isLoading = useStoreState((state) => state.isLoading);
  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <main className="Home">
      <main className="Home">
        {isLoading && <p className="statusMsg">Loading posts...</p>}
        {!isLoading && fetchError && (
          <p className="statusMsg" style={{ color: "red" }}>
            {fetchError}
          </p>
        )}
        {!isLoading &&
          !fetchError &&
          (searchResults.length ? (
            <Feed posts={searchResults} />
          ) : (
            <p className="statusMsg">No posts to display.</p>
          ))}
      </main>
    </main>
  );
}

export default Home;
