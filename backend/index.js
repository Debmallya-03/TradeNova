require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import Models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

// Import Routes
const chatbotRoute = require("./routes/chatbotRoute").default || require("./routes/chatbotRoute"); // ✅ Fix import issue
const authRoutes = require("./routes/auth"); // ✅ Import auth routes

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Use Routes
app.use("/api", chatbotRoute); // ✅ Chatbot API
app.use("/api/auth", authRoutes); // ✅ Authentication API

// Routes
app.get("/allHoldings", async (req, res) => {
    try {
        let allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);
    } catch (error) {
        res.status(500).json({ error: "Error fetching holdings" });
    }
});

app.get("/allPositions", async (req, res) => {
    try {
        let allPositions = await PositionsModel.find({});
        res.json(allPositions);
    } catch (error) {
        res.status(500).json({ error: "Error fetching positions" });
    }
});

app.post("/newOrder", async (req, res) => {
    try {
        let newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });

        await newOrder.save();
        res.send("Order saved!");
    } catch (error) {
        res.status(500).json({ error: "Error saving order" });
    }
});

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB Connected!"))
    .catch((err) => console.log("DB Connection Error:", err));

app.listen(PORT, () => {
    console.log(`App Started on PORT ${PORT}`);
});
