import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import BorgosTeam from './components/BorgosTeam/BorgosTeam.jsx';
import Openings from './components/Openings/Openings.jsx';
import Benefits from './components/Benifits/Benifits.jsx';
import Business from './components/Business/Business.jsx';
const delay = 5;
function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <div className="App">
    <Header/>
    <BorgosTeam/>
    <Openings/>
    <Benefits/>
   {show ?<Business/>:""} 
    </div>
  );
}

export default App;
