const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Team = sequelize.define(
  "Team",
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "short_name",
    },
    logoId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: "logo_id",
      references: {
        model: "media_library",
        key: "id",
      },
      onDelete: "SET NULL",
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
      validate: {
        min: 0,
        max: 100,
      },
    },
    primaryColor: {
      type: DataTypes.STRING,
      defaultValue: "#000000",
      field: "primary_color",
    },
    secondaryColor: {
      type: DataTypes.STRING,
      defaultValue: "#FFFFFF",
      field: "secondary_color",
    },
    stadiumName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "stadium_name",
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: "is_public",
    },
  },
  {
    tableName: "teams",
    timestamps: true,
    underscored: true,
  },
);

module.exports = Team;
