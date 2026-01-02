const express = require("express");
const path = require("path");
const app = express();

// STATIC
app.use("/public", express.static(path.join(__dirname, "public")));

// ROOT
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿.html"));
});

// PORT (Render requirement)
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Running on port", PORT);
});
