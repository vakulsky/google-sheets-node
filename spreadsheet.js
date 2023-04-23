const {GoogleSpreadsheet} = require('google-spreadsheet');
const dotenv = require('dotenv');

async function getSpreadsheetData(doc_id, sheet_index, cellsRange, cells) {
    const doc = new GoogleSpreadsheet(doc_id);
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });
    const info = await doc.loadInfo();
    const sheet = doc.sheetsByIndex[sheet_index];
    await sheet.loadCells(cellsRange);

    var cellsData = [];
    for(const cellPosition of cells){
        const cell = await sheet.getCellByA1(cellPosition);
        cellsData.push(cell.value);
    }

    return cellsData;
}

module.exports = { getSpreadsheetData };
