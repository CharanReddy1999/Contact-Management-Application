const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

// The dotenv module's config method is called to load environment variables from a .env file in the current directory.
// These environment variables are then accessible through process.env.

const app = express();

const port = process.env.PORT || 5002;

// app.use() is a middleware
// express.json() is builtin middleware where it parses the incoming request body
// if its in JSON format.
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on the port ${port}`);
});
