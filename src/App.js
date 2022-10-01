import logo from './logo.svg';
import './App.css';
import { hello } from './components/exercises';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { hello }
      </header>
    </div>
  );
}

export default App;
