const express = require("express");
const router = express.Router();
const {
  testFunction,
  queryFunction,
} = require("../controllers/user-controller");

router.get("/test", testFunction);
router.post("/query", queryFunction);

module.exports = router;
