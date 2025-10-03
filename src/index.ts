import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import integrationRoutes from "./routes/integrationRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/integrations", integrationRoutes);

mongoose.connect(process.env.MONGO_URI!)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));