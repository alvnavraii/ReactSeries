function Square({ color, isDarkText }) {
  return (
    <section
      className="square"
      style={{ backgroundColor: color, color: isDarkText ? "white" : "black" }}
    >
      <p>{color ? color : "Empty Value"}</p>
    </section>
  );
}
export default Square;
