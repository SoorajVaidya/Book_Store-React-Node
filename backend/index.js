import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { PORT } from "./config.js";
import { sequelize } from "./models/bookModels.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Setup for ES Modules to use __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5555", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-type"],
  })
);


app.use("/books", booksRoute);

//  React static files from the build folder 
app.use(express.static(path.join(__dirname, "../frontend/dist")));


app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});


sequelize
  .sync()
  .then(() => {
    console.log("Connected to SQLite database!");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
