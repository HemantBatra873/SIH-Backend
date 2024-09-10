const express = require("express");
const router = express.Router();
const testFunction = require("../controllers/user-controller");

router.get("/test", testFunction);

module.exports = router;
