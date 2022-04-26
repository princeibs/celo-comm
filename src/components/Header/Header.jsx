import React from "react";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="app__header">
      <div className="app__header-logo">
        <span>D</span>Blog
      </div>
      <div className="app__header-nav">
        <div onClick={() => props.handleNavItemClick("posts")} className="posts">Posts</div>
        <div onClick={() => props.handleNavItemClick("write")} className="write">Write</div>
        <div onClick={() => props.handleNavItemClick("market")} className="market">Market</div>
        <div className="info">
          <div>15 cUSD</div>
          <div>7 RP</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
