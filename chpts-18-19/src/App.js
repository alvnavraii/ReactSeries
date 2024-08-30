import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "./api/posts";
import { format } from "date-fns";
import EditPost from "./EditPost";

function App() {
  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const handleEdit = async (id) => {
    const updatedPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title: editTitle,
      datetime: format(new Date(), "MMMM dd, yyyy pp"),
      body: editBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      const allPosts = response.data;
      setPosts(posts.map((post) => (post.id === id ? allPosts : post)));
      setEditTitle("");
      setEditBody("");
    } catch (err) {
      console.log("There was an error");
      console.log(err.message);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log("There was an error");
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("There was an error");
          console.log(err.message);
        }
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  return (
    <div className="App">
      <Header title={"React Js Blog"} />

      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home posts={searchResults} />} />
          <Route
            path="/post"
            element={
              <NewPost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                posts={posts}
                setPosts={setPosts}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditPost
                posts={posts}
                handleEdit={handleEdit}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
                editBody={editBody}
                setEditBody={setEditBody}
                setPosts={setPosts}
              />
            }
          />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} setPosts={setPosts} />}
          />
          <Route path="about" Component={About} />
          <Route path="*" Component={Missing} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
