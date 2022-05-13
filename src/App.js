import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import BigNumber from "bignumber.js";

import {
  Header,
  CreateContent,
  BlogsList,
  BlogDetails,
  Footer,
} from "./components";
import "./App.scss";
import DBlogAbi from "./contract/DBlog.abi.json";
import erc20abi from "./contract/erc20.abi.json";

const ERC20_DECIMALS = 18;
const dBlogContractAddress = "0xF431805f4D96144758a160C6b3f0ed78D29b16BA";
const cUSDContractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";

const App = () => {
  // vars
  const [blog, setBlog] = useState();
  const [posts, setPosts] = useState();
  const [postsCount, setPostsCount] = useState();
  const [activePage, setActivePage] = useState("posts");
  const [kit, setKit] = useState();
  const [cUsdBalance, setCUsdBalance] = useState(0);
  const [userWalletAddress, setUserWalletAddress] = useState(
    "0x00000000000000000000"
  );
  const [dBlogContract, setDBlogContract] = useState();

  const [alertMessage, setalertMessage] = useState();
  const [showAlertBox, setShowAlertBox] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    connectWallet();
  }, []);

  useEffect(() => {
    if (kit && userWalletAddress) {
      getUserBalance();
    }
  }, [kit, userWalletAddress]);

  useEffect(() => {
    if (dBlogContract) {
      getFeed();
    }
  }, [dBlogContract]);

  // //

  const handleNavItemClick = async (active) => {
    await getFeed();
    setActivePage(active);
  };

  const alertOn = (aletMsg) => {
    setalertMessage(aletMsg);
    setShowAlertBox(true);
  };

  const alertOff = () => setShowAlertBox(false);

  // approve payment before transferring tokens
  const approvePayment = async (_amount) => {
    const cUSDContract = new kit.web3.eth.Contract(
      erc20abi,
      cUSDContractAddress
    );
    const response = await cUSDContract.methods
      .approve(dBlogContractAddress, _amount)
      .send({ from: userWalletAddress });
    return response;
  };

  // connect wallet to app
  const connectWallet = async () => {
    if (window.celo) {
      alertOn("⚠️ Please approve this DApp to use it.");
      try {
        await window.celo.enable();
        const web3 = new Web3(window.celo);
        let kit = newKitFromWeb3(web3);

        const accounts = await kit.web3.eth.getAccounts();
        const defaultAccount = accounts[0];
        kit.defaultAccount = defaultAccount;

        setKit(kit);
        setUserWalletAddress(defaultAccount);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(
        "You need to install the celo wallet extension in order to use this app"
      );
    }
  };

  // get both cUSD balance and RP balance
  const getUserBalance = async () => {
    console.log("Getting user balance...");
    try {
      const balance = await kit.getTotalBalance(userWalletAddress);
      const cUsdBalance = balance.cUSD.shiftedBy(-ERC20_DECIMALS).toFixed(2);
      const dBlogContract = new kit.web3.eth.Contract(
        DBlogAbi,
        dBlogContractAddress
      );

      setCUsdBalance(cUsdBalance);
      setDBlogContract(dBlogContract);
    } catch (error) {
      console.log("Error occured while trying to get user balances: " + error);
    }
  };

  // create new post
  const getNewlyCreatedPost = async (slug, imgUrl, title, content) => {
    alertOn("Creating new post ...");
    try {
      await dBlogContract.methods
        .createPost(slug, imgUrl, title, content, new Date().toUTCString())
        .send({ from: userWalletAddress });
    } catch (error) {
      console.log("New error while creating new post: " + error);
    }

    await getFeed();
    setActivePage("posts");
    alertOff();
  };

  // load all post feed from contract
  const getFeed = async () => {
    alertOn("Loading posts ...");
    const slugs = await dBlogContract.methods.getSlugs().call();
    let postsCount = await dBlogContract.methods.getPostLength().call();
    const _posts = [];
    for (let i = 0; i < slugs.length; i++) {
      let postSlug = slugs[i];
      let blogPost = new Promise(async (resolve, reject) => {
        let getPost = await dBlogContract.methods.getPost(postSlug).call();
        resolve({
          id: getPost[0],
          slug: getPost[1],
          coverImgUrl: getPost[2],
          authorAddress: getPost[3],
          title: getPost[4],
          content: getPost[5],
          datePublished: getPost[6],
          likes: getPost[7],
          comments: getPost[8],
        });
      });
      _posts.push(blogPost);
    }
    const postFeed = await Promise.all(_posts);
    setPosts(postFeed);
    setPostsCount(postsCount);
    alertOff();
  };

  // like a post with slug @postSlug
  const likePost = async (postSlug) => {
    alertOn("Liking this post ...");
    try {
      await dBlogContract.methods
        .likePost(postSlug)
        .send({ from: userWalletAddress });
    } catch (error) {
      console.log("New Error occured while liking post: " + error);
    }

    getFeed();
    setActivePage("posts");
    alertOff();
  };

  // un-like a post with slug @postSlug
  const unlikePost = async (postSlug) => {
    alertOn("Un-Liking this post ...");
    try {
      await dBlogContract.methods
        .unlikePost(postSlug)
        .send({ from: userWalletAddress });
    } catch (error) {
      console.log("New Error occured while un-liking this post: " + error);
    }

    getFeed();
    setActivePage("posts");
    alertOff();
  };

  // comment on post
  const makeComment = async (postSlug, comment) => {
    alertOn("Saving comment ...");
    try {
      await dBlogContract.methods
        .makeComment(postSlug, comment)
        .send({ from: userWalletAddress });
    } catch (error) {
      console.log("New Error occured while saving comment: " + error);
    }

    getFeed();
    setActivePage("posts");
    alertOff();
  };

  const buyCoffee = async (postSlug, _amount) => {
    alertOn("Buying this author a coffee ...");
    const amount = new BigNumber(_amount).shiftedBy(ERC20_DECIMALS).toString();
    try {
      await approvePayment(amount);
    } catch (error) {
      console.log(
        "New Error while trying to approve buyCoffee payment: " + error
      );
    }

    try {
      await dBlogContract.methods
        .buyCoffee(postSlug, amount)
        .send({ from: userWalletAddress });
    } catch (error) {
      console.log(
        "New error while trying to pay for coffee via contract: " + error
      );
    }

    await getUserBalance();
    setActivePage("posts");
  };

  //
  return (
    <div>    
      <Header
        cUsdBalance={cUsdBalance}
        userwa={userWalletAddress}
        handleNavItemClick={handleNavItemClick}
      />
      {showAlertBox && (
        <div className="alert">
          <div className="">{alertMessage}</div>
        </div>
      )}
      {activePage === "write" && (
        <CreateContent
          postsCount={postsCount}
          getNewlyCreatedPost={getNewlyCreatedPost}
        />
      )}
      {activePage === "posts" && (
        <BlogsList
          posts={posts}
          getDetails={setBlog}
          showDetails={handleNavItemClick}
        />
      )}
      {activePage === "details" && (
        <BlogDetails
          userwa={userWalletAddress}
          likePost={likePost}
          unlikePost={unlikePost}
          buyCoffee={buyCoffee}
          makeComment={makeComment}
          blog={blog}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
