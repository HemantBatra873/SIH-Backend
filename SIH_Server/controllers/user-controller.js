const testFunction = (req, res) => {
  res.send("Hello from the server!");
};

const queryFunction = (req, res, next) => {
  try {
    const userMessage = req.body.message;
    // Respond with a basic message (in future, this can be dynamic)
    res.json({ response: "Ok done" });
  } catch (error) {
    next(error);
  }
};

module.exports = { testFunction, queryFunction };
