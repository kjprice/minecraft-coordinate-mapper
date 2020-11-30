import { useEffect } from 'react';

import PointsControls from './components/PointsControls/index';
import Stats from './components/Stats';

import { pullCoordinates } from './redux/actions/coordinates';

function App() {
  useEffect(pullCoordinates);
  
  return (
    <div className="App">
      <PointsControls />
      <Stats />
    </div>
  );
}

export default App;
