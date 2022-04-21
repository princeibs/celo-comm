import React, { useState } from "react";

import "./Market.scss";

const Market = () => {
  const [showBuyView, setShowBuyView] = useState(false);
  return (
    <div className="app__market">
      <div className="app__market-content">
        <div className="menu">
          <span onClick={() => setShowBuyView(true)}>Buy</span>
          <span onClick={() => setShowBuyView(false)}>Sell</span>
        </div>
        <hr />
        <div className="content">
          {showBuyView ? (
            <div className="buy-view">Buy View</div>
          ) : (
            <div className="sell-view">Sell View</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Market;
