import SpreadsheetUri from "./SpreadsheetUri";

// TODO: List all spreadsheets in drop down
// TODO: Add a button to set (or refresh if url has already been used)
// TODO: On set, authenticate user (if not already authenticated), get all sheets from spreadsheet, allow user to select a sheet


const GoogleSheets = () => {
  return <div>
    <div><label>New Google Sheet URL: <SpreadsheetUri /> </label></div>
  </div>
}

export default GoogleSheets;