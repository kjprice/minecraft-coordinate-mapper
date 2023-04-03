/* eslint-disable no-undef */
import store from '../../redux/store';
import { setGoogleAccessToken, setSelectedGoogleSheet, setSelectedGoogleSheetSheets, setSpreadsheetData, setSelectedSheetName } from '../../redux/actions/google';
import { setCoordinatesFromSheet } from '../../redux/actions/sketch';
import config from '../../config';
const {googleClientId, googleDriveFilePickerScope, googleApiKey} = config;
console.log({googleClientId, googleDriveFilePickerScope, googleApiKey});

let tokenClient;
let accessToken = null;
let gisLocalInited = false;
let gisLocalStarted = false;

function gisLoaded() {
    // debugger;
    // TODO(developer): Replace with your client ID and required scopes
    tokenClient = google.accounts.oauth2.initTokenClient({
        // TODO: pull from config
        client_id: googleClientId,
        scope: googleDriveFilePickerScope,
        callback: '', // defined later
    });
    gisLocalInited = true;
    authenticateGoogle();
}
export const showPicker = async () => {
    if (!accessToken) {
        await startGoogleInterval();
    }
    const picker = new google.picker.PickerBuilder()
        // Only allow user to pick google sheets
        // https://developers.google.com/drive/picker/guides/overview
        .addView(google.picker.ViewId.SPREADSHEETS)
        .setOAuthToken(accessToken)
        // TODO: Pull from config
        .setDeveloperKey(googleApiKey)
        .setCallback(pickerCallback)
        .build();
    picker.setVisible(true);
}


const refreshToken = () => {
    tokenClient.requestAccessToken({ prompt: 'none' });
}

let refreshTokenInterval = null;

const fiftyFiveMinutes = 1000 * 60 * 55;

// Create and render a Google Picker object for selecting from Drive
function authenticateGoogle() {
    return new Promise((res, rej) => {
        if (!gisLocalInited) {
            res(false);
            return;
        }

        // Request an access token
        tokenClient.callback = async (response) => {
            if (response.error !== undefined) {
                rej(response);
                return;
            }
            accessToken = response.access_token;
            store.dispatch(setGoogleAccessToken(accessToken));
            res(true);
        };

        if (accessToken === null) {
            if (!refreshTokenInterval) {
                refreshTokenInterval = setInterval(refreshToken, fiftyFiveMinutes)
            }

            // Prompt the user to select a Google Account and ask for consent to share their data
            // when establishing a new session.
            tokenClient.requestAccessToken({ prompt: 'consent' });
        } else {
            // Skip display of account chooser and consent dialog for an existing session.
            tokenClient.requestAccessToken({ prompt: '' });
        }
    });
}

export const loadAndSetSpreadsheetData = async (spreadsheetId, sheetName) => {
    try {
        const spreadsheetData = await loadGoogleSheetData(spreadsheetId, sheetName);
        store.dispatch(setSpreadsheetData(spreadsheetData, spreadsheetId));
        store.dispatch(setCoordinatesFromSheet(spreadsheetData));
    } catch(e) {
        if (e.status === 403) {
            if (!gisLocalInited) {
                gisLoaded();
            }
            await authenticateGoogle();
            await loadAndSetSpreadsheetData(spreadsheetId, sheetName);
            return;
        }
        throw(e);
    }
}

export const selectSheetByName = async (spreadsheetId, sheetName) => {
    await loadAndSetSpreadsheetData(spreadsheetId, sheetName);
    store.dispatch(setSelectedSheetName(sheetName));
}
// A simple callback implementation.
async function pickerCallback(data) {
    if (data[google.picker.Response.ACTION] !== google.picker.Action.PICKED) {
        return;
    }
    const doc = data[google.picker.Response.DOCUMENTS][0];
    const url = doc[google.picker.Document.URL];
    const name = doc[google.picker.Document.NAME];
    const id = doc[google.picker.Document.ID];
    
    console.log({doc});
    console.log({url});
    console.log({data});
    store.dispatch(setSelectedGoogleSheet(url, name, id));
    const sheetNames = await loadAllGoogleSheets(id);
    store.dispatch(setSelectedGoogleSheetSheets(sheetNames));
    await loadAndSetSpreadsheetData(id, sheetNames[0]);
}

function startGoogle() {
    if (!pickerInited || !gisInited) {
        return false;
    }
    if (gisLocalStarted) {
        return true;
    }
    gisLocalStarted = true;
    gisLoaded();

    return true;
}

export const loadAllGoogleSheets = async (spreadsheetId) => {
    const response = await gapi.client.sheets.spreadsheets.get({
        spreadsheetId,
      });
    
    const sheetNames = response.result.sheets.map(sheet => sheet.properties.title);

    return sheetNames;
}

const loadGoogleSheetData = async (spreadsheetId, sheetName) => {
    const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId,
        range: sheetName,
      });

    const sheetData = response.result.values;
    return sheetData;
}

let googleInterval;
export const startGoogleInterval = () => {
    if (googleInterval) {
        return;
    }
    return new Promise((res, rej) => {
        googleInterval = setInterval(() => {
            if(startGoogle()) {
                clearInterval(googleInterval);
                res();
            }
        }, 1000);
    });
}

