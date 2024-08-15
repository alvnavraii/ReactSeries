import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";

import { useState, useEffect } from "react";
import SearchItem from "./SearchItem";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => (async () => await fetchItems())(), 2000);
  }, []);

  const setAndSaveItems = (listItems) => {
    setItems(listItems);
  };

  const handleCheeck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const addItem = (newItem) => {
    // --- Mi forma ---
    const listItems = [...items];
    const item = { id: listItems.length + 1, item: newItem, checked: false };
    listItems.push(item);
    setAndSaveItems(listItems);

    // -- La forma que plantea el vídeo
    /*const id = items.length?items[items.length-1].id+1:1
  const item = {id:id, checked:false, item:newItem}
  const listItems = [...items, item]
  setAndSaveItems(listItems)*/
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />

      <main>
        {isLoading && <p style={{ marginTop: "2rem" }}>Loading Items...</p>}
        {fetchError && (
          <p style={{ color: "red", marginTop: "2rem" }}>
            {" "}
            {`Error: ${fetchError}`}
          </p>
        )}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheeck={handleCheeck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <Footer lenght={items.length} />
    </div>
  );
}

export default App;
