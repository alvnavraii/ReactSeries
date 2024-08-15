import ItemList from "./ItemList";

function Content({ items, handleCheeck, handleDelete }) {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheeck={handleCheeck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>The List is empty</p>
      )}
    </>
  );
}
export default Content;
