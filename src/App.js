
import PointsControls from './components/PointsControls/index';
import Stats from './components/Stats';
import GoogleSheets from './components/GoogleSheets'

function App() {
  
  return (
    <div className="App">
      <GoogleSheets />
      <PointsControls />
      <Stats />
    </div>
  );
}

export default App;
