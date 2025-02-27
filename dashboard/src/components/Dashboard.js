import React from "react";
import { Route, Routes } from "react-router-dom";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import AISupport from "./AISupport";
import StockMarketInsights from "./StockMarketInsights"; // Import StockMarketInsights
import AIPredictions from "./AIPredictions";
import PortfolioAnalysis from "./PortfolioAnalysis";
import Chatbot from "./Chatbot";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      

      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/ai-support" element={<AISupport />} />
          <Route path="/stock-insights" element={<StockMarketInsights />} /> {/* ✅ Only here */}
          <Route path="/ai-predictions" element={<AIPredictions />} />
          <Route path="/portfolio-analysis" element={<PortfolioAnalysis />} />
          <Route path="/chat-ai" element={<Chatbot />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
