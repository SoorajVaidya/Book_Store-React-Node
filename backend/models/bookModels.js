import { Sequelize, DataTypes } from "sequelize";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Absolute path to the SQLite file
const dbPath = path.join(__dirname, "../database.sqlite");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
});

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  auther: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publishYear: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export { sequelize, Book };
