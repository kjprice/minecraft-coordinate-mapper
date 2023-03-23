
import PointsControls from './components/PointsControls/index';
import Stats from './components/Stats';

import SelectSpreadsheet from './components/GoogleSheets/SelectSpreadsheet'
import ConnectGoogle from './components/GoogleSheets/ConnectGoogle'
import GoogleSheets from './components/GoogleSheets'
import SketchControls from './components/SketchControls'

function App() {
  
  return (
    <div className="App">
      <GoogleSheets />
      <SelectSpreadsheet />
      <ConnectGoogle />
      <PointsControls />
      <Stats />
      <SketchControls />
    </div>
  );
}

export default App;
