import React from 'react';
import BorgosTree from '../images/BorgosTree.jpg'
import AdImage from '../images/AdImage.png';
import clip from '../images/Clip.jpg';
import house from '../images/house.svg';
import Logo from '../images/Logo.png';
import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import skype from '../images/skype.png';
import './Business.css';
const Business = () => {
    return (
        <div className="Businessdiv">
            <img src={BorgosTree} className="treebg" alt="" />
            <div className="businessbg">
                <img src={clip} className="adbg" alt="" />
                <img src={AdImage} className="imgboy" alt="" />
                <div className="businesscontent">
                    <h2 className="businessheader1">TRANSFORM YOUR</h2>
                    <h2 className="businessheader2">BUSINESS WITH BORGOS</h2>
                    <h5 className="businesscontext">Let us apply our
                    tried-and-tested capabilities to your business objectives.
                    To learn more about our outsourcing services tailored to
         your unique needs or out-of-the-box solutions, please write to us at info@borgos.in</h5>
                </div>
            </div>
            <div className="home">
                <img src={house} className="homebg" alt="home" />
                <div className="homecontain">
                    <div className="homeheader">
                        <img className="Logo" src={Logo} alt="logo" />
                        <div className="topdash" />
                    </div>
                    <div className="homeinfo">
                        <div className="Company">
                            <h2 className="homeheader">Company</h2>
                            <a className="homecontext"> About Us</a>
                            <a className="homecontext">Careers</a>
                            <a className="homecontext">Blog</a>
                            <a className="homecontext"> News</a>
                            <a className="homecontext">Partners</a>

                        </div>
                        <div className="Company usa">
                            <h2 className="homeheader">USA</h2>
                            <h4 className="homecontext">89 Main Street, Suite 205
                            Medway, Massachusetts 02053
                            Phone:+1 (508)-458-5485
                        E-mail: sales@borgos.in</h4>
                        </div>
                        <div className="Company usa">
                            <h2 className="homeheader">Bengaluru</h2>
                            <h4 className="homecontext">91 Springboard Business Hub Pvt Ltd,
                            512/10, Dhaaruni Commercial,
                            Service Lane, Outer Ring Road,
                            Mahadevapura, Bengaluru-560048
                            Phone: +91-9435343434
                        E-mail: sales@borgos.in</h4>
                        </div>
                        <div className="Company usa">
                            <h2 className="homeheader">Guwahati</h2>
                            <h4 className="homecontext">167, Opp NRL Petrol Pump,
                            Jayanagar, Sixmile, Guwahati 781022
                            Phone: +91-6002200816, +91-361-7961597
                        E-mail: sales@borgos.in</h4>
                        </div>

                    </div>
                    <div className="homemapdiv">
                        <div className="homemapdivleft">
                            <div className="Company ">
                                <h2 className="homeheader">Services</h2>
                                <a className="homecontext"> Managed Cloud Services</a>
                                <a className="homecontext">DevOps & Continuous Delivery </a>
                                <a className="homecontext">Big Data Services</a>
                                <a className="homecontext"> NewsBusiness Applications</a>
                                <a className="homecontext">Testing & QA Services</a>
                            </div>

                            <div className="Company">
                                <h2 className="homeheader">Product Engineering </h2>
                                <a className="homecontext"> XD Design Studio</a>
                                <a className="homecontext">Product & Cloud Platform </a>
                                <a className="homecontext">Product & Platform Development</a>

                            </div>
                            <div className="Company">
                                <h2 className="homeheader">Social Media </h2>
                                <div calssName="social">
                                    <img className="homeiocn" src={facebook} alt="facebook" />
                                    <img className="homeiocn" src={linkedin} alt="facebook" />
                                    <img className="homeiocn" src={skype} alt="facebook" />
                                </div>
                            </div>

                        </div>
                        <div className="mapdiv"> space for map</div>

                    </div>
                    <div className="homefooter">
                    <h4 className="homecontext">© 2021 Borgos Technologies Pvt Ltd    </h4>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default Business;