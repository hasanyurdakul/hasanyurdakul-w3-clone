import React from "react";

function BlogPosts() {
  return (
    <div className="w3-third">
      <h3>BLOG POSTS</h3>
      <ul className="w3-ul w3-hoverable">
        <li className="w3-padding-16">
          <img
            src="https://www.w3schools.com/w3images/workshop.jpg"
            className="w3-left w3-margin-right"
            style={{ width: 50 }}
            alt=""
          />
          <span className="w3-large">Lorem</span>
          <br />
          <span>Sed mattis nunc</span>
        </li>
        <li className="w3-padding-16">
          <img
            src="https://www.w3schools.com/w3images/gondol.jpg"
            className="w3-left w3-margin-right"
            style={{ width: 50 }}
            alt=""
          />
          <span className="w3-large">Ipsum</span>
          <br />
          <span>Praes tinci sed</span>
        </li>
      </ul>
    </div>
  );
}

export default BlogPosts;
