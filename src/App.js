import React, { useState, useEffect, useCallback } from "react";
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import BigNumber from "bignumber.js";

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
import DBlog from "./contract/DBlog.abi.json";
import ierc20 from "./contract/ierc20.abi.json";

const ERC20_DECIMALS = 18;
const dBlogContractAddress = "0xf8e81D47203A594245E36C48e151709F0C19fBe8";
const cUSDContractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";

const App = () => {
  // vars
  const [blog, setBlog] = useState();
  const [activePage, setActivePage] = useState("posts");
  const [kit, setKit] = useState();
  const [userBalance, setUserBalance] = useState(0);
  const [userWalletAddress, setUserWalletAddress] = useState();
  const [dBlogContract, setDBlogContract] = useState();

  // fxns
  const handleNavItemClick = (active) => setActivePage(active);

  const getNewlyCreatedPost = (key, title, content) => {
    console.log(
      `Successfully published Article: \nkey: ${key} \nTitle: ${title} \nContent: ${content}`
    );
  };

  const connectWallet = () => {};

  const getUserBalance = () => {};

  const createUser = () => {};

  const createPost = () => {};

  const getPost = () => {};

  const removePost = () => {};

  const likePost = () => {};

  const unlikePost = () => {};

  const makeComment = () => {};

  const buyCoffee = () => {};

  const buyRpFf = () => {};

  const buyRpFa = () => {};

  const sellRp = () => {};

  //
  return (
    <div>
      <Header handleNavItemClick={handleNavItemClick} />
      {activePage === "write" && (
        <CreateContent getNewlyCreatedPost={getNewlyCreatedPost} />
      )}
      {activePage === "posts" && (
        <BlogsList
          blogs={data.blogs}
          getDetails={setBlog}
          showDetails={handleNavItemClick}
        />
      )}
      {activePage === "details" && <BlogDetails blog={blog} />}
      {activePage === "market" && <Market />}
      <Footer />
    </div>
  );
};

export default App;
