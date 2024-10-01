import express from "express";
import { config } from "dotenv";
import router from "./routers/router.js";
import { dbConnection } from "./database/dbconnection.js";
import cors from 'cors';
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

// Load environment variables
config({ path: "./config/config.env" });

// Connect to the database first
dbConnection();

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handlers
app.use( router);

// Error-handling middleware (should be last)
app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

export default app;
