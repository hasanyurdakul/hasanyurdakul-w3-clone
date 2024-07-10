import React from "react";
import LoremIpsum from "./components/LoremIpsum";
import BlogPosts from "./components/BlogPosts";
import PopularTags from "./components/PopularTags";

function Footer() {
  return (
    <footer className="w3-row-padding w3-padding-32">
      <LoremIpsum />
      <BlogPosts />
      <PopularTags />
    </footer>
  );
}

export default Footer;
