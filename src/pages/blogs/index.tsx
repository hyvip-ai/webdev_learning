import React from "react";
import { blogs } from "../../data/blogs";
import { Main } from "../../types/main";
function Blogs() {
  return blogs.length ? (
    <div className="container">
      {blogs.map((blog: Main, index: number) => (
        <a href={blog.url} target="_blank" key={blog.id} rel="noreferrer">
          {`${index + 1}. ${blog.title}`}
        </a>
      ))}
    </div>
  ) : (
    <h2>No blogs present</h2>
  );
}

export default Blogs;
