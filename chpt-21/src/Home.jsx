import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "./context/DataContext";

function Home() {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading...</p>}
      {fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {searchResults.length === 0 && !isLoading && !fetchError && (
        <p className="statusMsg">No posts found.</p>
      )}
      {searchResults.length > 0 && <Feed posts={searchResults} />}
    </main>
  );
}

export default Home;
