const express = require("express");
const router = express.Router();
const {
  testFunction,
  queryFunction,
} = require("../controllers/user-controller");

router.get("/test", testFunction);
router.post("/query", queryFunction);

router.post("/payment", (req, res, next) => {
  res.json({
    message: "Working",
  })
})

module.exports = router;
