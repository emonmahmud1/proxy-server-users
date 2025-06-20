const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/users", async (req, res) => {
  const { take = 10, skip = 0 } = req.query;

  try {
    const response = await fetch(
      `https://tech-test.raintor.com/api/users/GetUsersList?take=${take}&skip=${skip}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
