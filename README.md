# Minecraft Coordinates

This allows a user to map values from a spreadsheet onto a 3d dimensional drawing.

### Setup

 1. First you need to have a google spreadsheet created with column names `Name`, `X`, `Y`, `Z`, `Type`
 2. Follow these steps to "publish" your spreadsheet
 3. Update the google.coordinates.js file to use your spreadsheet id (**TODO: There should be a UI for this**)

### Development
 1. Please install create-react-app. Then go to the root directory in a shell language, and run `npm install && npm start`.
 2. The most important thing to note here is that we are using google api https://github.com/bpk68/g-sheets-api

TODO:

- Create a unique id for points
- Draw the base (0) as a plane
- Show altitude layers:
    - 0 = bedrock
    - 62 = sea level
    - 127 = clouds
- Color code boxes by "type"
- Change zoom (translationsPerAxis[2]) based on the extent of points (try to show all of them concisely)
- Instead of drop downs, show a table (react-virtualized), when hovering over row, highlight the point
- Track what percent complete a location is
- Allow to click on a point in the map

Dream TODO:

- Take picture of screen
- Extract coordinates from picture
- Ask user for name of point
- Show picture of point when user highlights row in table