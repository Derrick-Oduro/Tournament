const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Tournament = sequelize.define(
  "Tournament",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "user_id",
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    seasonId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "season_id",
      references: {
        model: "seasons",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    format: {
      type: DataTypes.ENUM(
        "league",
        "worldcup",
        "ucl_old",
        "ucl_new",
        "knockout",
        "swiss",
        "custom",
      ),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("setup", "in_progress", "completed"),
      defaultValue: "setup",
    },
    privacy: {
      type: DataTypes.ENUM("private", "unlisted", "public"),
      defaultValue: "public",
    },
    currentStage: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "current_stage",
    },
    config: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {},
    },
    displayOrder: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: "display_order",
    },
    viewsCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: "views_count",
    },
    followersCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: "followers_count",
    },
    likesCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: "likes_count",
    },
  },
  {
    tableName: "tournaments",
    timestamps: true,
    underscored: true,
  },
);

module.exports = Tournament;
