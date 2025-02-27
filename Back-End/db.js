const mysql = require("mysql2");
require("dotenv").config({ path: "./.env" }); 

console.log("🔍 Database Config:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "", 
  database: process.env.DB_NAME || "todo",
  port: process.env.DB_PORT || 4306, 
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1); 
  }
  console.log("✅ Connected to MySQL database");
});

module.exports = db;
