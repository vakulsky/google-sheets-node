const express = require('express');
const dotenv = require('dotenv');
const { getSpreadsheetData } = require('./spreadsheet.js');

//Configure app
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

//Process request
app.post('/spreadsheet', async (req, res) => {
    const token = req.body.token;
    const doc_id = req.body.doc_id;
    const sheet_index = req.body.sheet_index;
    const cellsRange = req.body.cells_range;
    const cells = req.body.cells;

  if (token !== process.env.TOKEN) {
    return res.status(403).send('Invalid token');
  }

    const data = await getSpreadsheetData(doc_id, sheet_index, cellsRange, cells);
    res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
