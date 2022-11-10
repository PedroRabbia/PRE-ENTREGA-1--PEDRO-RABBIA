import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Section from './components/section';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='section'>
       <Section/>
      </div>
    </div>
    
  );
}

export default App;
