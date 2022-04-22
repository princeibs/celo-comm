import React, { useState } from "react";

import data from "../../data";
import "./Market.scss";

const selectedBtnStyle = {
  backgroundColor: "white",
  outline: "solid 1px gray",
}

const Market = () => {
  const [showBuyView, setShowBuyView] = useState(false);
  const [sellers, setSellers] = useState(data.sellersList);

  return (
    <div className="app__market">
      <div className="app__market-content">
        <div className="menu">
          <span style={showBuyView ? selectedBtnStyle : {}} onClick={() => setShowBuyView(true)}>Buy</span>
          <span style={!showBuyView ? selectedBtnStyle : {}} onClick={() => setShowBuyView(false)}>Sell</span>
        </div>
        <hr />
        <div className="content">
          {showBuyView ? (
            <div className="buy-view">
              {sellers.map((seller) => (
                <div className="item">
                  <div className="avatar"></div>
                  <div className="message">{seller.message}</div>
                  <div className="details">
                    <div className="quantity">{seller.quantity}</div>
                    <div className="buy-btn">Buy</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="sell-view">
              <textarea placeholder="I want to sell 3RP" />
              <div className="sell-view--menu">
                <input type="number" min="1" defaultValue={1} />
                <div className="sell-btn">Sell</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Market;
