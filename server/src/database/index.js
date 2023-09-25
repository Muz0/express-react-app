/* eslint-disable no-undef */
import { Sequelize } from "sequelize";
// local Postgres DB
const credentials = {
  username: "postgres",
  password: "2012",
  database: "e_commerce",
  host: "localhost",
  dialect: "postgres",
  port: 5432,
};

const database_config = new Sequelize(
  credentials.database,
  credentials.username,
  credentials.password,
  {
    host: credentials.host,
    dialect: credentials.dialect,
    port: credentials.port,
    logging: false,
  }
);

export default database_config;
