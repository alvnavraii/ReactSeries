import { useEffect, useState } from "react";
import Form from "./Form";
//import List from "./List";
import Table from "./Table";

function App() {
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchItems();
  }, [reqType]);

  return (
    <div>
      <Form reqType={reqType} setReqType={setReqType} />
      <Table items={items} />
    </div>
  );
}

export default App;
