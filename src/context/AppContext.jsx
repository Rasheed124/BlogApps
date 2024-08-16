import React, { useEffect, useState } from "react";

import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [allBlogs, setAllBlogs] = useState([]);

  // Fetching all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      const apiUrl = "/api/blogs?_limit=3";

      try {
        const response = await fetch(`${apiUrl}`);
        const data = await response.json();
        setAllBlogs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchBlogs();
  }, []);

  // Add New Blog
  const addBlog = async (newBlog) => {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });
    return;
  };

  // Update Job
  const updateBlog = async (updatedBlog) => {
    const res = await fetch(`/api/blogs/${updatedBlog.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBlog),
    });

    if (!res.ok) throw new Error("Failed to update the blog");

    const updatedBlogs = allBlogs.map((blog) =>
      blog.id === updatedBlog.id ? updatedBlog : blog
    );

    setAllBlogs(updatedBlogs);
  };

  // Delete Job
  const deleteBlog = async (id) => {
    const res = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete the blog");

    const filteredBlogs = allBlogs.filter((blog) => blog.id !== id);
    // Update the blogs data
    setAllBlogs(filteredBlogs);
  };

  const contextValue = {
    allBlogs,
    addBlog,
    updateBlog,
    deleteBlog,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default ContextProvider;
