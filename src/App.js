import Gameboard from './components/Gameboard';
import './App.css';

const SELECTIONS = [1, 2, 3,
                    4, 5, 6,
                    7, 8, 9];

function App() {
  return (
    <Gameboard gameArray={SELECTIONS}/>
  );
}

export default App;
