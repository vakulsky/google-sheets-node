const express = require("express");
const app = express();
const spreadsheet = require("./spreadsheet");

app.use(express.json());

app.use("/spreadsheet", spreadsheet);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
