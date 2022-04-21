import React from "react";
import { Header, BlogPreview, BlogDetails, Market, Footer } from "./components";
import data from "./data";

import "./App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <BlogPreview />
      <BlogDetails blog={data.blogs[0]} />
      <Market />
      <Footer />
    </div>
  )
};

export default App;
