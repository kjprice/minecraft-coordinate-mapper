import PointsControls from "./components/PointsControls/index";
import Stats from "./components/Stats";

import SelectSpreadsheet from "./components/GoogleSheets/SelectSpreadsheet";
import ConnectGoogle from "./components/GoogleSheets/ConnectGoogle";
import GoogleSheets from "./components/GoogleSheets";
import SketchControls from "./components/SketchControls";
import SketchSettings from "./components/SketchSettings";
import RefreshSpreadsheet from "./components/GoogleSheets/RefreshSpreadsheet";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-7">
          <GoogleSheets />
        </div>
        <div className="col-sm-5">
          <div className="row">
            <div className="col-sm-7">
              <SelectSpreadsheet />
            </div>
            <div className="col-sm-5">
              <RefreshSpreadsheet />
            </div>
          </div>
        </div>
      </div>
      <ConnectGoogle />
      <PointsControls />
      <Stats />
      <SketchControls />
      <SketchSettings />
    </div>
  );
}

export default App;
