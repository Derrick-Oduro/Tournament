const app = require("./src/app");
const { sequelize } = require("./src/config/database");

const PORT = process.env.PORT || 3000;

// Sync database and start server
const startServer = async () => {
  try {
    // Sync database (create tables if they don't exist)
    // In production, use migrations instead of sync
    await sequelize.sync({ alter: process.env.NODE_ENV === "development" });
    console.log("✅ Database synced successfully");

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(`🔗 API: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(() => process.exit(1));
});

// Start the server
startServer();
