import logo from './logo.svg';
import './App.css';
import { HelloName } from './components/exercises';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { HelloName('Sciuti') }
      </header>
    </div>
  );
}

export default App;
