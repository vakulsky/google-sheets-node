const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();
const { getSpreadsheetData } = require('./spreadsheetConnect.js');

//Process request
router.post('/', async (req, res) => {
  try{
    const token = req.body.token;
    const doc_id = req.body.doc_id;
    const sheet_index = req.body.sheet_index;
    const cellsRange = req.body.cells_range;
    const cells = req.body.cells;

    console.log(process.env.TOKEN);

    if (token != process.env.TOKEN) {
      return res.status(403).send('Invalid token');
    }

    const data = await getSpreadsheetData(doc_id, sheet_index, cellsRange, cells);
    res.status(200).json(data);
  }
  catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
