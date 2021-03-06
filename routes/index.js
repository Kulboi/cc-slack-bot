"use strict";

import express from "express";

const router = express.Router();

// Base endpoint
router.get("/", (req, res) => {
  res.send("Welcome to seren chatbot");
});
