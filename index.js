const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    hey: "Node JS + Docker",
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
