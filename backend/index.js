const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/message", (req,res) => {
  const message = req.body.message;
  console.log("Received Message: ", message);
  res.send("message received!");
});

app.listen(4000, () => console.log("listening on port 4000"));
