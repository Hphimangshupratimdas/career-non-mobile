import React,{useRef} from "react";
import Collapse from "@kunukn/react-collapse";
import Describtion1,{Describtion2,Describtion3,Describtion4,Describtion5} from './Jobdescribtion';
import OpeningsIcon_1 from '../images/OpeningsIcon_1.png';
import OpeningsIcon_2 from '../images/OpeningsIcon_2.png';
import OpeningsIcon_3 from '../images/OpeningsIcon_3.png';
import OpeningsIcon_4 from '../images/OpeningsIcon_4.png';
import OpeningsIcon_5 from '../images/OpeningsIcon_5.png';
import useOutsideClick from '../Tools/useOutsideClick';
import ScrollIntoView from 'react-scroll-into-view';
import plus from '../images/plus.png'
import useWindowDimensions from '../Tools/Windowsize';
import './Drop.css';
const initialState = [false, false, false,false,false];
function reducer(state, { type, index }) {
  switch (type) {
   
    case "collapse-all":
      return [false, false, false,false,false];
    case "toggle":
    state=[false, false, false,false,false];
      state[index] = !state[index];
      return [...state];

    default:
      throw new Error();
  }
}

function Block({ isOpen, title, onToggle, children,openingimg }) {
  
  return (
   
    <div className="block" >
    <a  className="btn toggle" onClick={onToggle}>
    <img  className="opeiningimg" src={openingimg} alt="icon"/>
      <span ><h4>{title}</h4></span>
      <img  className="opeiningimg last" src={plus} alt="icon" isOpen={isOpen} />
    </a>
  
    <Collapse layoutEffect isOpen={isOpen}>
      {children}
    </Collapse>
  </div>
  
  );
}

function Drop() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const allcollapseref = useRef();
  useOutsideClick(allcollapseref, () => {
    if ( state.find(s => s === true)){ 
    dispatch({ type: "collapse-all" })}
  });
  const { height, width } = useWindowDimensions();
  const ratio=width/height;
  return (
    <div ref={allcollapseref} className={ratio>=1.2?"openingcontainer":"openingcontainer2"}>
   
    
      <Block 
      openingimg= {OpeningsIcon_1}
        title="DevOps Engineer(3 Positions)"
        isOpen={state[0]}
        onToggle={() => dispatch({ type: "toggle", index: 0 })}
        
      >
        <div  id="footer" className="content">
       <Describtion1/>
          
        </div>
      </Block>
      
      <ScrollIntoView selector="#footer">
      <Block
      openingimg= {OpeningsIcon_2}
        title="Java / J2EE Developer (3 Positions)"
        isOpen={state[1]}
        onToggle={() => dispatch({ type: "toggle", index: 1 })}
        
      >
        <div id="footer" className="content">
          <Describtion2/>
          
        </div>
      </Block>
      </ScrollIntoView>

      <Block
      openingimg= {OpeningsIcon_3}
        title="Software Developer"
        isOpen={state[2]}
        onToggle={() => dispatch({ type: "toggle", index: 2 })}
    
      >
        <div className="content">
          <Describtion3/>
          
        </div>
      </Block>
      <ScrollIntoView selector="#footer">
      <Block
      openingimg= {OpeningsIcon_4}
        title="Hybrid Mobile App Developer"
        isOpen={state[3]}
        onToggle={() => dispatch({ type: "toggle", index: 3 })}
        
      >
        <div id="footer" className="content">
          <Describtion4/>
          
        </div>
      </Block>
      </ScrollIntoView>
      <ScrollIntoView selector="#footer">
      <Block
      openingimg= {OpeningsIcon_5}
        title="Mainframe Developer"
        isOpen={state[4]}
        onToggle={() => dispatch({ type: "toggle", index: 4 })}
      
      >
        <div className="content">
          <Describtion5/>
          
        </div>
      </Block>
      </ScrollIntoView>
    </div>
    
  );
}

export default Drop;