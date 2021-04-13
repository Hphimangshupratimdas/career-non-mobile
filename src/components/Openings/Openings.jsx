import React from 'react';
import './Opening.css';
import Drop from './Drop';




const Openings =()=>
{ 
    
    return (
        <div className="openingdiv">
        <div className="openingheader">
        <h1 className="openingheader1">CURRENT</h1>
        <h1 className="openingheader2">OPENINGS</h1>
        </div>
        <h3 className="openingtext">
        We have exciting opportunities available across all levels,
         disciplines and locations. Browse our list of current openings. 
        If you are interested in joining our dynamic team,
         please send us your updated resume to<a className="email"> jobs@borgos.in</a> 
        </h3>
  <Drop/>

        </div>
    )
}

export default Openings;