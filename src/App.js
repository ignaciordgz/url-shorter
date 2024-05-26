import './App.css';
import Screen from './pages/screen';
import Navbar from './components/navbar/navbar';
import { useEffect } from 'react';

function App() 
{
  useEffect(() => 
  {
    document.documentElement.style.setProperty('--font-poppins', "'Poppins', sans-serif");
  }, []);

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
