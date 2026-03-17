const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from server 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Quyen" }
  ]);
});