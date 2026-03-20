const express = require("express");
const router = express.Router();
const { pool } = require("./db");
const { validateProduct } = require("./validate");

router.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Recurso no encontrado" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.post("/products", async (req, res) => {
  try {
    const validationError = validateProduct(req.body);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const { campo1, campo2, campo3, campo4, campo5, campo6 } = req.body;

    const result = await pool.query(
      `INSERT INTO products (campo1, campo2, campo3, campo4, campo5, campo6)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [campo1, campo2, campo3, campo4, campo5, campo6]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.put("/products/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const validationError = validateProduct(req.body);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const { campo1, campo2, campo3, campo4, campo5, campo6 } = req.body;

    const result = await pool.query(
      `UPDATE products
       SET campo1 = $1, campo2 = $2, campo3 = $3, campo4 = $4, campo5 = $5, campo6 = $6
       WHERE id = $7
       RETURNING *`,
      [campo1, campo2, campo3, campo4, campo5, campo6, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Recurso no encontrado" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Recurso no encontrado" });
    }

    res.status(200).json({ message: "Recurso eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

module.exports = router;