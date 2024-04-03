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
        <p>Earning</p>
        <a>$ 10,000</a>
        <p>⬇️37.8% this moth</p>
      </div>
      <div className="item">
        <p>Orders</p>
        <a>$2.4k</a>
        <p>🔺2% this month</p>
      </div>
      <div className="item">
        <p>Balance</p>
        <a>$2.4k</a>
        <p>⬇️2% this month</p>
      </div>
      <div className="item">
        <p>Total Sales</p>
        <a>$89k</a>
        <p>🔺11% this month</p>
      </div>
    </div>
  );
}
