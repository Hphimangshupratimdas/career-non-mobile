
import './App.css';
import Header from './components/header/header.jsx';
import BorgosTeam from './components/BorgosTeam/BorgosTeam.jsx';
import Openings from './components/Openings/Openings.jsx';
import Benefits from './components/Benifits/Benifits.jsx';
import Business from './components/Business/Business.jsx';

function App() {
  return (
    <div className="App">
    <Header/>
    <BorgosTeam/>
    <Openings/>
    <Benefits/>
    <Business/>
    </div>
  );
}

export default App;
