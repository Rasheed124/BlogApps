import React, { useContext } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
// import SinglePost from "./pages/SinglePost";
// import AddBlog from "./pages/AddBlog";
// import { AppContext } from "./context/AppContext";
// import EditBlog from "./pages/EditBlog";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  // const { addBlog, updateBlog, deleteBlog } = useContext(AppContext);
  return (
    <>
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/single-post/:id"
            element={<SinglePost deleteBlog={deleteBlog} />}
          />
          <Route
            path="/add-blog"
            element={<AddBlog addBlogSubmit={addBlog} />}
          />
          <Route
            path="/edit-blog/:id"
            loader={addBlog}
            element={<EditBlog updateBlogSubmit={updateBlog} />}
          /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
