import express from "express";
import database_config from "./database/index.js";
// Sequelize is already imported in database/index.js
// import { Sequelize } from "sequelize";


const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/db", (req, res) => {
  // check if the database is connected
  database_config
    .authenticate()
    .then(() => {
      console.log("Database connected");
      res.send("Database connected");
    })
    .catch((err) => {
      console.log("Unable to connect to the database:", err);
      res.send("Unable to connect to the database:", err);
    });
});

export default app;
