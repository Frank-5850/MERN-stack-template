// Remember to rename all "first"
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");

const firstRoutes = require("./routes/firstRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/first",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use("/api", firstRoutes);

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});
