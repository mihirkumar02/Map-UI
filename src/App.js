import React from 'react';
import MapContainer from './components/map/MapContainer';
import TaskContainer from './components/task/TaskContainer';
import MechanicContainer from './components/mechanic/MechanicContainer';

function App() {
  return (
    <div>
        <div className="row Main">
          <div className="col-md-4 col-sm-12">
            <TaskContainer />
          </div>
          <div className="col-md-4 col-sm-12">
            <MapContainer/>
          </div>
          <div className="col-md-4 col-sm-12">
            <MechanicContainer />
          </div>
        </div>
    </div>
  );
}

export default App;
