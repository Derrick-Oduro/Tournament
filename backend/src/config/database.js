const { Sequelize } = require("sequelize");
const path = require("path");
require("dotenv").config();

// Database configuration - use SQLite for development, PostgreSQL for production
const isProduction = process.env.NODE_ENV === "production";
const usePostgres = process.env.USE_POSTGRES === "true" || isProduction;

let sequelize;

if (usePostgres) {
  // PostgreSQL configuration for production
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      dialect: "postgres",
      logging: process.env.NODE_ENV === "development" ? console.log : false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  );
} else {
  // SQLite configuration for development
  const dbPath = path.join(__dirname, "../../data/tournament.db");
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: dbPath,
    logging: process.env.NODE_ENV === "development" ? console.log : false,
  });
}

// Test database connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error.message);
  }
};

module.exports = { sequelize, testConnection };
