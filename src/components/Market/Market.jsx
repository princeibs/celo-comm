import React, { useState } from "react";

import data from "../../data";
import "./Market.scss";

const selectedBtnStyle = {
  backgroundColor: "white",
  outline: "solid 1px gray",
};

const Market = () => {
  const [showBuyView, setShowBuyView] = useState(false);
  const [sellers, setSellers] = useState(data.sellersList);
  const [sellQty, setSellQty] = useState(1);
  const [bfaQty, setBfaQty] = useState(1);
  const [sellMsg, setSellMsg] = useState();

  const handleBfaqtyChange = (e) => {
    setBfaQty(e.target.value);
  };

  const handleSellQtyChange = (e) => {
    setSellQty(e.target.value);
  };

  const handleBfaBtn = () => {
    console.log("Successfully bought " + bfaQty + "RP from this App");
  };

  const handleSellBtn = () => {
    console.log(
      "Successfully sold " + sellQty + "RP with the message: " + sellMsg
    );
  };

  const handleBffBtn = (sellerAddress, qty) => {
    console.log("Successfully purchased " + qty + "RP from " + sellerAddress);
  };

  const handleSellMsgInput = (e) => {
    setSellMsg(e.target.value);
  };
  return (
    <div className="app__market">
      <div className="app__market-content">
        <div className="menu">
          <span
            style={showBuyView ? selectedBtnStyle : {}}
            onClick={() => setShowBuyView(true)}
          >
            Buy
          </span>
          <span
            style={!showBuyView ? selectedBtnStyle : {}}
            onClick={() => setShowBuyView(false)}
          >
            Sell
          </span>
        </div>
        <hr />
        <div className="content">
          {showBuyView ? (
            <div className="buy-view">
              <div className="bfa">
                <div onClick={() => handleBfaBtn()} className="bfa-btn">
                  Buy RP from App
                </div>
                <input
                  type="number"
                  min={1}
                  value={bfaQty}
                  onChange={handleBfaqtyChange}
                />
              </div>
              {sellers.length > 0 && (
                <div className="buy-view--subtitle">
                  <div>OR</div>
                  <div>Buy from frens</div>
                </div>
              )}

              {sellers?.map((seller) => (
                <div className="item">
                  <div className="avatar"></div>
                  <div className="message">{seller.message}</div>
                  <div className="details">
                    <div className="quantity">{seller.quantity}</div>
                    <div
                      className="buy-btn"
                      onClick={() =>
                        handleBffBtn(seller.sellerAddress, seller.quantity)
                      }
                    >
                      Buy
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="sell-view">
              <textarea
                placeholder="Hey, I want to sell 3RP"
                value={sellMsg}
                onChange={handleSellMsgInput}
              />
              <div className="sell-view--menu">
                <input
                  type="number"
                  min="1"
                  value={sellQty}
                  onChange={handleSellQtyChange}
                />
                <div className="sell-btn" onClick={() => handleSellBtn()}>
                  Sell
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Market;
