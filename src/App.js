import React, { useState } from "react";
import {
  Header,
  CreateContent,
  BlogsList,
  BlogDetails,
  Market,
  Footer,
} from "./components";

import "./App.scss";
import data from "./data";

const App = () => {
  const [blog, setBlog] = useState();
  const [activePage, setActivePage] = useState("posts");
  
  const handleNavItemClick = (active) => setActivePage(active);

  const getNewlyCreatedPost = (key, title, content) => {
    console.log(
      `Successfully published Article: \nkey: ${key} \nTitle: ${title} \nContent: ${content}`
    );
  }
  
  return (
    <div>
      <Header handleNavItemClick={handleNavItemClick} />
      {activePage === "write" && <CreateContent getNewlyCreatedPost={getNewlyCreatedPost } />}
      {activePage === "posts" && (
        <BlogsList blogs={data.blogs} getDetails={setBlog} showDetails={handleNavItemClick} />
      )}
      {activePage === "details" && <BlogDetails blog={blog} />}
      {activePage === "market" && <Market />}
      <Footer />
    </div>
  );
};

export default App;
