const User = require("./User");
const Team = require("./Team");
const Tournament = require("./Tournament");
// More models will be added here as we build them

// Define associations

// User associations
User.hasMany(Team, { foreignKey: "userId", as: "teams" });
User.hasMany(Tournament, { foreignKey: "userId", as: "tournaments" });

// Team associations
Team.belongsTo(User, { foreignKey: "userId", as: "creator" });

// Tournament associations
Tournament.belongsTo(User, { foreignKey: "userId", as: "creator" });

module.exports = {
  User,
  Team,
  Tournament,
};
