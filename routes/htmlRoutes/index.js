// HTML ROutes to return notes to html files
const path = require("path");
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;