import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

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
        Holdings ({allHoldings.length})
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
              <th style={{ padding: "10px" }}>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profitColor = isProfit ? "#4caf50" : "#ff5252";
              const dayColor = stock.isLoss ? "#ff5252" : "#4caf50";

              return (
                <tr key={index} style={{ borderBottom: "1px solid #333" }}>
                  <td style={{ padding: "10px" }}>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td style={{ color: profitColor }}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td style={{ color: profitColor }}>{stock.net}</td>
                  <td style={{ color: dayColor }}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          backgroundColor: "#1e1e1e",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <div className="col" style={{ textAlign: "center" }}>
          <h5 style={{ color: "#FFD700" }}>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col" style={{ textAlign: "center" }}>
          <h5 style={{ color: "#1E90FF" }}>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col" style={{ textAlign: "center" }}>
          <h5 style={{ color: "#4caf50" }}>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </div>
  );
};

export default Holdings;
