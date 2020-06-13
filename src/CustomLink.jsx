import React from "react";

function CustomLink({ text, href }) {
  return (
    <div>
      <a href={href ? href : null}>{text}</a>
    </div>
  );
}

export default CustomLink;
