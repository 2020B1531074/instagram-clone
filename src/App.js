
import './App.css';
import LeftSide from './component/leftSide';
import MiddleSide from './component/middleSide';
import RightSide from './component/rightSide';

function App() {
  return (
    <div className="App">
      <div className="leftSideHome">
        <LeftSide />
      </div>
      <div className="middleSide">
      
        <MiddleSide />
        

      </div>
      <div className="rightSide">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
