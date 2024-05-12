import './App.css';
import Screen from './pages/screen';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Screen/>
      </header>
    </div>
  );
}

export default App;
