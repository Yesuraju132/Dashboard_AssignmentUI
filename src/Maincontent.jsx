import React from "react";
import "./maincontent.css";
export default function Maincontent() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }}
    >
      <div className="item">
        <p className="sub-item">Earning</p>
        <a className="sub-item">$ 10,000</a>
        <p className="sub-item">⬇️37.8% this moth</p>
      </div>
      <div className="item">
        <p className="sub-item">Orders</p>
        <a className="sub-item">$2.4k</a>
        <p className="sub-item">🔺2% this month</p>
      </div>
      <div className="item">
        <p className="sub-item">Balance</p>
        <a className="sub-item">$2.4k</a>
        <p className="sub-item">⬇️2% this month</p>
      </div>
      <div className="item">
        <p className="sub-item">Total Sales</p>
        <a className="sub-item">$89k</a>
        <p className="sub-item">🔺11% this month</p>
      </div>
    </div>
  );
}
