const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to seren chatbot");
});
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ challenge: req.body.challenge });
});

module.exports = router;
