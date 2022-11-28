/* eslint-disable no-undef */
export function authenticate() {
  return new Promise((res, rej) => {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        return rej(resp.error);
      }
      res();
    };

    // eslint-disable-next-line no-undef
    if (gapi.client.getToken() === null) {
      tokenClient.requestAccessToken({prompt: 'consent'});
    } else {
      tokenClient.requestAccessToken({prompt: ''});
    }
  });
}

function getSpreadsheetId(spreadsheetUrl) {
  return spreadsheetUrl.split('spreadsheets/d/')[1].split('/edit')[0];
}

      
export function getSpreadsheetMetadata(spreadsheetUrl) {
  // const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1ynP94NWJFvC-fogo-KSFHMa3DVFQcsyQMA1dlhqa7oc/edit#gid=0'
  const spreadsheetId = getSpreadsheetId(spreadsheetUrl);
  return gapi.client.sheets.spreadsheets.get({spreadsheetId})
  .then(response => {
    const sheetNames = response.result.sheets.map(sheet => sheet.properties.title);
    const spreadsheetName = response.result.properties.title;

    return {
      sheetNames,
      spreadsheetName,
    };
  });
}

export async function getSpreadsheetValues(spreadsheetUrl, sheetName) {
  const spreadsheetId = getSpreadsheetId(spreadsheetUrl);

  const response = await gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId,
    range: sheetName,
  });

  return response.values;
}
