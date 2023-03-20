import { useEffect } from 'react';

import PointsControls from './components/PointsControls/index';
import Stats from './components/Stats';

import { pullCoordinates } from './redux/actions/coordinates';
import { startGoogleInterval } from './components/Google/connectToGoogleDrive.js';
// 'src/'
function App() {
  startGoogleInterval();
  // useEffect(pullCoordinates);
  
  // TODO: Display button to connect to google drive
  // TODO: Display button to pick google drive spreadsheet
  return (
    <div className="App">
      <PointsControls />
      <Stats />
    </div>
  );
}

export default App;
