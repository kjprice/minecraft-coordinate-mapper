import React from "react";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SheetDropdown from "./SheetDropdown";

const mapStateToProp = (state) => {
  const { google } = state;
  console.log({ google });

  const { accessToken, sheet } = google;
  return {
    accessToken,
    sheet,
  };
};

// import PullSpreadsheetControl from "./PullSpreadsheetControl";

// TODO: List all spreadsheets in drop down
// TODO: Add a button to set (or refresh if url has already been used)
// TODO: On set, authenticate user (if not already authenticated), get all sheets from spreadsheet, allow user to select a sheet

const GoogleSheets = (props) => {
  console.log({ props });
  const { sheet } = props;
  if (!sheet.url) {
    return null;
  }
  const { url, name, id } = sheet;
  return (
    <div className="row">
      <div className="col-sm-5">
        Google Spreadsheet: <a href={url}>{name}</a>
      </div>
      <div className="col-sm-5">
        <Form>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formSelectedSheetName"
          >
            <Form.Label column sm={5}>
              Selected Sheet:
            </Form.Label>
            <Col sm={7}>
              <SheetDropdown />
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default connect(mapStateToProp)(GoogleSheets);
