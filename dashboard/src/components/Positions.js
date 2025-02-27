import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "#e0e0e0",
        minHeight: "100vh",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
        Positions ({positions.length})
      </h3>

      <div className="order-table" style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#1e1e1e",
            color: "#e0e0e0",
            borderRadius: "8px",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid #333" }}>
              <th style={{ padding: "10px" }}>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profitColor = isProfit ? "#4caf50" : "#ff5252";
              const dayColor = stock.isLoss ? "#ff5252" : "#4caf50";

              return (
                <tr key={index} style={{ borderBottom: "1px solid #333" }}>
                  <td style={{ padding: "10px" }}>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td style={{ color: profitColor }}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td style={{ color: dayColor }}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
