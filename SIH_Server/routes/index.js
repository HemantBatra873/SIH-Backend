var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hemant Batra");
});

router.post("/pay", (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json({
    message: "Success",
  })
})

module.exports = router;
