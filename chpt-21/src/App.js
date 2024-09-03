import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <Header title={"React Js Blog"} />

      <BrowserRouter>
        <DataProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<NewPost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="about" Component={About} />
            <Route path="*" Component={Missing} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
