import LineItem from "./LineItem";
const ItemList = ({ items, handleCheeck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheeck={handleCheeck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
