import { Link } from "react-router-dom";
function Missing() {
  return (
    <main className="Missing">
      <h2>Missing</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        <Link to="/">Back</Link>
      </p>
    </main>
  );
}
export default Missing;
