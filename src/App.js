
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-orange-400 text-5xl font-bold '>this is header</h1>
      <p>this is a paragraph</p>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
