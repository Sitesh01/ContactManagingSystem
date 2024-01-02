const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

//Configuring dotenv file
dotenv.config();

//calling db connection
connectDB();

//Creating express object
const app = express();

const port = process.env.PORT || 5000;

//Inbuilt middleware in express
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
