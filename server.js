const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors');
const path = require('path');

dotenv.config();

(async () => {
  await connectDB();

  const app = express();
  app.use(cors());
  app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
  app.use(express.json());
  app.use(express.static('.'));

  app.use("/api/users", require("./routes/userRoutes"));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();