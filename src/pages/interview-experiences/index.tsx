import React from "react";
import { interviewExperiences } from "../../data/interviewExperince";
import { Main } from "../../types/main";
function Interview() {
  return interviewExperiences.length ? (
    <div className="container">
      {interviewExperiences.map((blog: Main, index: number) => (
        <a href={blog.url} target="_blank" key={blog.id} rel="noreferrer">
          {`${index + 1}. ${blog.title}`}
        </a>
      ))}
    </div>
  ) : (
    <h2>No interview experiences present</h2>
  );
}

export default Interview;
