import logo from './logo.svg';
import './App.css';
import { TitleSum } from './components/exercises';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { TitleSum('Hello, ', 'Batman') }
      </header>
    </div>
  );
}

export default App;
