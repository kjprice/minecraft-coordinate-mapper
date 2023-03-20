/* eslint-disable no-undef */
import store from '../../redux/store';
import { setGoogleAccessToken, setGooglePickerMessage } from '../../redux/actions/google';
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
    return createPicker();
}
export const showPicker = () => {
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

// Create and render a Google Picker object for selecting from Drive
function createPicker() {
    if (!gisLocalInited) {
        return false;
    }
    // debugger;

    // Request an access token
    tokenClient.callback = async (response) => {
        if (response.error !== undefined) {
            throw (response);
        }
        accessToken = response.access_token;
        store.dispatch(setGoogleAccessToken(accessToken));
        localStorage.googleAccessToken = accessToken;
        // TODO: Move outside - make a button available to click at this time
        // showPicker();
    };

    if (accessToken === null) {
        // Prompt the user to select a Google Account and ask for consent to share their data
        // when establishing a new session.
        tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
        // Skip display of account chooser and consent dialog for an existing session.
        tokenClient.requestAccessToken({ prompt: '' });
    }
    // debugger;

    return true;
}
// A simple callback implementation.
function pickerCallback(data) {
    let url = 'nothing';
    if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
        let doc = data[google.picker.Response.DOCUMENTS][0];
        url = doc[google.picker.Document.URL];
    }
    let message = `You picked: ${url}`;
    console.log({message});
    setGooglePickerMessage(message);
    // document.getElementById('result').innerText = message;
}

function startGoogle() {
    if (!pickerInited || !gisInited) {
        return false;
    }
    if (gisLocalStarted) {
        return true;
    }
    gisLocalStarted = true;
    return gisLoaded();
}

let googleInterval;
const startGoogleInterval = () => {
    // debugger;
    googleInterval = setInterval(() => {
        if(startGoogle()) {
            clearInterval(googleInterval);
        }
    }, 1000);
}

export { startGoogleInterval };
