# Minecraft Coordinates

This allows a user to map values from a spreadsheet onto a 3d dimensional drawing.

### Setup

 1. First you need to have a google spreadsheet created with column names `Name`, `X`, `Y`, `Z`, `Type`
 2. Follow these steps to "publish" your spreadsheet
 3. Update the google.coordinates.js file to use your spreadsheet id (**TODO: There should be a UI for this**)

### Development
 1. Please install create-react-app. Then go to the root directory in a shell language, and run `npm install && npm start`.
 2. The most important thing to note here is that we are using google api https://github.com/bpk68/g-sheets-api


### Google Developer Info

Using tutorial at https://developers.google.com/sheets/api/quickstart/js#prereqs

 - Project Url: https://console.cloud.google.com/home/dashboard?project=minecraft-coordinates-369518
 - Project Name: minecraft-coordinates
 - Project Number: 851640512484
 - Create Credentials https://console.cloud.google.com/apis/credentials?project=minecraft-coordinates-369518
    - API Key AIzaSyCsAkar3jishAeQ1sBAEtb2Ch-7Ki1s4h4
    - API ID e8ab2666-c2c9-4d3d-a032-60c39dc30202
    - Oath Client ID 851640512484-ba4t84v64uttpjmefo6big011lffdgj2.apps.googleusercontent.com 
        - Previously ~851640512484-768fcds67n8p9g6onfp0rti453i57kee.apps.googleusercontent.com~

 - Google Sheets API: https://console.cloud.google.com/apis/api/sheets.googleapis.com/metrics?project=minecraft-coordinates-369518


TODO:

- Allow user to login just one time, save their session
- Allow user to paste in coordinates and select point name/type
    - User can then save point which will update google sheet
- Have a refresh button next to their google spreadsheet name, which will gather new data from the sheet
- On point hover, show popover

Dream TODO:

- Take picture of screen
- Extract coordinates from picture
- Ask user for name of point
- Show picture of point when user highlights row in table


### TO Start:

```
nvm install 16.18.0
nvm use 16.18.0
npm install
npm start

# Shorthand
nvm use 16.18.0; SKIP_PREFLIGHT_CHECK=true npm start;
```