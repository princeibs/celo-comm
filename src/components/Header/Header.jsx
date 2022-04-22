import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-logo">
        <span>D</span>Blog
      </div>
      <div className="app__header-nav">
        <div className="write">Write</div>
        <div className="feed">Feed</div>
        <div className="market">Market</div>
        <div className="info">
          <div>15 cUSD</div>
          <div>7 RP</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
