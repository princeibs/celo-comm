import React from "react";
import "./Header.scss";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

const Header = (props) => {

  return (
    <div className="app__header">
      <div className="app__header-logo">
        <span>Celo</span>Comm
      </div>
      <div className="app__header-nav">
        <div
          onClick={() => props.handleNavItemClick("posts")}
          className="posts"
        >
          Posts
        </div>
        <div
          onClick={() => props.handleNavItemClick("write")}
          className="write"
        >
          Write
        </div>
        <div className="info">
          <div className="header--userIdenticon">
            <Jazzicon diameter={50} seed={jsNumberForAddress(props.userwa)} />
          </div>
          <div className="header--balance">{props.cUsdBalance} cUSD</div>
        </div>
      </div>     
    </div>
  );
};

export default Header;
