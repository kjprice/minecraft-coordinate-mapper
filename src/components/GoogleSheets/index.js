import SpreadsheetUri from "./SpreadsheetUri";
import SpreadsheetUris from "./SpreadsheetUris";
import PullSpreadsheetControl from "./PullSpreadsheetControl";
import SheetNameControl from "./SheetNameControl";

// TODO: Create button to add a new spreadsheet
//  - When clicked show textbox for new spreadsheet and a button called "set"
//  - When clicked, perform normal sync but also set the spreadsheet url with associated info

// TODO: When new sheet is selected, show the data if exists, otherwise pull the data for the sheet

const GoogleSheets = () => {
  return <div>
    <div><label>New Google Sheet URL: <SpreadsheetUri /> </label></div>
    <div><label>Existing Google Sheet URLs: <SpreadsheetUris /> </label></div>
    <div><label>Sheet To Display: <SheetNameControl /> </label></div>
    <div><PullSpreadsheetControl /></div>
    
  </div>
}

export default GoogleSheets;