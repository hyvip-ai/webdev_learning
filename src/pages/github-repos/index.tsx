import React from "react";
import { githubRepos } from "../../data/githubRepos";
import { Main } from "../../types/main";

function Github() {
  return githubRepos.length ? (
    <div className="container">
      {githubRepos.map((blog: Main, index: number) => (
        <a href={blog.url} target="_blank" key={blog.id} rel="noreferrer">
          {`${index + 1}. ${blog.title}`}
        </a>
      ))}
    </div>
  ) : (
    <h2>No github repos present</h2>
  );
}

export default Github;
