import React from "react";
import { Header, CreateContent, BlogPreview, BlogDetails, Market, Footer } from "./components";
import data from "./data";

import "./App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <CreateContent />
      <BlogPreview />
      <BlogDetails blog={data.blogs[0]} />
      <Market />
      <Footer />
    </div>
  )
};

export default App;
