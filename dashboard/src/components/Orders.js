import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders") // Adjust endpoint if needed
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

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
      {orders.length === 0 ? (
        <div className="no-orders" style={{ textAlign: "center" }}>
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
            Orders ({orders.length})
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
                {orders.map((order, index) => {
                  const curValue = order.price * order.qty;
                  const isProfit = curValue - order.avg * order.qty >= 0.0;
                  const profitColor = isProfit ? "#4caf50" : "#ff5252";
                  const dayColor = order.isLoss ? "#ff5252" : "#4caf50";

                  return (
                    <tr key={index} style={{ borderBottom: "1px solid #333" }}>
                      <td style={{ padding: "10px" }}>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>{order.avg.toFixed(2)}</td>
                      <td>{order.price.toFixed(2)}</td>
                      <td>{curValue.toFixed(2)}</td>
                      <td style={{ color: profitColor }}>
                        {(curValue - order.avg * order.qty).toFixed(2)}
                      </td>
                      <td style={{ color: profitColor }}>{order.net}</td>
                      <td style={{ color: dayColor }}>{order.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
