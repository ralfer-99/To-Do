const express = require("express");
const router = express.Router();
const db = require("../db"); 


router.get("/", (req, res) => {
  const sql = "SELECT * FROM task ORDER BY created_at DESC LIMIT 5";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching tasks:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" });
  }

  db.query(
    "INSERT INTO task (title, description) VALUES (?, ?)",
    [title, description],
    (err, result) => {
      if (err) {
        console.error("Error adding task:", err);
        return res.status(500).json({ error: "Database error" });
      }

      res.status(201).json({ id: result.insertId, title, description });
    }
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM task WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting task:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "Task deleted successfully" });
  });
});

module.exports = router;
