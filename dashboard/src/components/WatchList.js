import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          style={styles.search}
        />
        <span style={styles.counts}>{watchlist.length} / 50</span>
      </div>

      <ul style={styles.list}>
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li
      style={styles.watchlistItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={styles.item}>
        <p style={stock.isDown ? styles.down : styles.up}>{stock.name}</p>
        <div style={styles.itemInfo}>
          <span style={styles.percent}>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown style={styles.down} />
          ) : (
            <KeyboardArrowUp style={styles.up} />
          )}
          <span style={styles.price}>{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span style={styles.actions}>
      <Tooltip title="Buy (B)" placement="top" arrow>
        <button style={styles.buy} onClick={handleBuyClick}>
          Buy
        </button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow>
        <button style={styles.sell}>Sell</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow>
        <button style={styles.action}>
          <BarChartOutlined style={styles.icon} />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow>
        <button style={styles.action}>
          <MoreHoriz style={styles.icon} />
        </button>
      </Tooltip>
    </span>
  );
};

// Inline Styles Object
const styles = {
  container: {
    backgroundColor: "#121212",
    color: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    width: "80%",
    maxWidth: "500px",
    margin: "auto",
    height: "80vh", // Set a fixed height
    overflowY: "auto", // Make it scrollable independently
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  search: {
    background: "transparent",
    border: "none",
    color: "#ffffff",
    width: "100%",
    padding: "8px",
    outline: "none",
  },
  counts: {
    color: "#aaaaaa",
    marginLeft: "10px",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  watchlistItem: {
    display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#1e1e1e",
  padding: "8px", // Reduce padding (was 12px)
  margin: "5px 0", // Reduce margin (was 8px)
  borderRadius: "6px",
  transition: "background 0.3s",
  cursor: "pointer",
  height: "40px", // Set a fixed height if needed
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  itemInfo: {
    display: "flex",
    alignItems: "center",
  },
  percent: {
    fontWeight: "bold",
    marginRight: "8px",
  },
  price: {
    marginLeft: "10px",
  },
  up: {
    color: "#4caf50", // Green for positive values
    fontWeight: "bold",
  },
  down: {
    color: "#ff5252", // Red for negative values
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    gap: "10px",
  },
  buy: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "6px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  sell: {
    backgroundColor: "#ff5252",
    color: "white",
    padding: "6px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  action: {
    backgroundColor: "#333333",
    color: "white",
    padding: "6px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  icon: {
    color: "white",
  },
};

