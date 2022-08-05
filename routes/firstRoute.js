// Remember to rename all "first"
const router = require("express").Router();
const { createFirst, readAllFirst } = require("../controllers/firstController");

router.post("/first", createFirst);
router.get("/first", readAllFirst);

module.exports = router;
