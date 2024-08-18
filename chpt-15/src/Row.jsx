import Cell from "./Cell";

function Row({ item }) {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        console.log(value);
        return <Cell key={key} cellValue={JSON.stringify(value)} />;
      })}
    </tr>
  );
}
export default Row;
