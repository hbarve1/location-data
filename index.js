require("dotenv").config();
const { google } = require("googleapis");
const { writeFile } = require("./fileSystem");
const pages = ["countries!a1:z100"];

const sheets = google.sheets({
  version: "v4",
  auth: process.env.GOOGLE_CLOUD_API_KEY,
});

async function getFromGoogleSheet({
  spreadsheetId = process.env.GOOGLE_SHEET_ID,
  range = process.env.GOOGLE_SHEET_RANGE,
} = {}) {
  return sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
}

getFromGoogleSheet().then((res) => console.log(res.data.values));
