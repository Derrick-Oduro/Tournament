require("dotenv").config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET || "dev_secret_key",
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || "dev_refresh_secret",
  jwtExpire: process.env.JWT_EXPIRE || "24h",
  jwtRefreshExpire: process.env.JWT_REFRESH_EXPIRE || "7d",

  // Password requirements
  passwordMinLength: 6,

  // Username requirements
  usernameMinLength: 3,
  usernameMaxLength: 20,
};
