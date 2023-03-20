
import PointsControls from './components/PointsControls/index';
import Stats from './components/Stats';

// import { pullCoordinates } from './redux/actions/coordinates';
import { startGoogleInterval } from './components/Google/connectToGoogleDrive.js';
import SelectSpreadsheet from './components/GoogleSheets/SelectSpreadsheet'
// 'src/'
import GoogleSheets from './components/GoogleSheets'

function App() {
  
  startGoogleInterval();
  // useEffect(pullCoordinates);
  // TODO: Display button to connect to google drive
  // TODO: Display button to pick google drive spreadsheet
  return (
    <div className="App">
      <GoogleSheets />
      <SelectSpreadsheet />
      <PointsControls />
      <Stats />
    </div>
  );
}

export default App;
