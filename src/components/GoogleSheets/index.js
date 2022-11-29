import SpreadsheetUri from "./SpreadsheetUri";
import SpreadsheetUris from "./SpreadsheetUris";
import PullSpreadsheetControl from "./PullSpreadsheetControl";
import SheetNameControl from "./SheetNameControl";

// TODO: List all spreadsheets in drop down
// TODO: Add a button to set (or refresh if url has already been used)
// TODO: On set, authenticate user (if not already authenticated), get all sheets from spreadsheet, allow user to select a sheet


const GoogleSheets = () => {
  return <div>
    <div><label>New Google Sheet URL: <SpreadsheetUri /> </label></div>
    <div><label>Existing Google Sheet URLs: <SpreadsheetUris /> </label></div>
    <div><label>Sheet To Display: <SheetNameControl /> </label></div>
    <div><PullSpreadsheetControl /></div>
    
  </div>
}

export default GoogleSheets;