function Input({ color, setColor, isDarkText, setIsDarkTest }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label>Add Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add Color Name"
        required
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setIsDarkTest(!isDarkText);
        }}
      >
        Toggle Text Color
      </button>
    </form>
  );
}
export default Input;
