import React from 'react';
import './header.css';
import headerlogo from '../images/headerlogo.png';
import menu from '../images/menu.svg';
import useWindowDimensions from '../Tools/Windowsize';
const Header = () => {
    const { height, width } = useWindowDimensions();
    const ratio=width/height;
    
    return (<div className={ratio>=1.2?"header":"header2"}>
        <img className="headericon" src={headerlogo} alt="logo" />
        
            {ratio>=1.2?<ul className="headeroptions">
                <li>
                    <a href='#' className="headeroption">Home</a>
                </li>
                <li>
                    <a href='#' className="headeroption">About</a>
                </li>
                <li>
                    <a href='#' className="headeroption">Technology</a>
                </li>
                <li>
                    <a href='#' id="dm" className="headeroption">Digital Marketing</a>
                </li>
                <li>
                    <a href='#' className="headeroption">Career</a>
                </li>
                <li>
                    <a href='#' className="headeroption">Resource</a>
                </li>
                <li>
                    <a href='#' className="headeroption">Contact</a>
                </li>
            </ul>: <img src={menu} alt="menu" className="menu"/>}
        </div>
    )

}

export default Header;

