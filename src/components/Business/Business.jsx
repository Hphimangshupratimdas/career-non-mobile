import React from 'react';
import BorgosTree2 from '../images/BorgosTree2.png'
import AdImage from '../images/AdImage.png';
import house from '../images/house.svg';
import home from '../images/home.png';
import Logo from '../images/Logo.png';
import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import skype from '../images/skype.png';
import AdBackground from '../images/AdBackground.jpg';
import Ad from '../images/Ad.jpg';
import map from '../images/map.png';
import './Business.css';
import useWindowDimensions from '../Tools/Windowsize';
const Business = () => {
    const { height, width } = useWindowDimensions();
    const ratio = width / height;
    return (
        <div>  { ratio >= 1.2 ? <div className="Businessdiv">
            <img src={BorgosTree2} className="treebg" alt="" />
            <div className="businessbg">
                <img src={Ad} className="adbg" alt="" />
                <img src={AdImage} className="imgboy" alt="" />
                <div className="businesscontent">
                    <h2 className="businessheader1">TRANSFORM YOUR</h2>
                    <h2 className="businessheader2">BUSINESS WITH<br/> BORGOS</h2>
                    <h5 className="businesscontext">Let us apply our
                    tried-and-tested capabilities to your business objectives.
                    To learn more about our outsourcing services tailored to
         your unique needs or out-of-the-box solutions, please write to us at info@borgos.in</h5>
                </div>
            </div>
            <div className="home">
                <img src={house} className="homebg" alt="home" />
                <div className="homecontain">
                    <div className="Homeheader">
                        <img className="Logo" src={Logo} alt="logo" />
                        <div className="topdash" />
                    </div>
                    <div className="homeinfo">
                      
                        <div className="Company usa">
                            <h2 className="homeheader">USA</h2>
                            <h4 className="homecontext">89 Main Street, Suite 205
                            Medway,
                <br/>Massachusetts 02053<br/>
                            Phone:+1 (508)-458-5485
                        E-mail: sales@borgos.in</h4>
                        </div>
                        <div className="Company">
                        <h2 className="homeheader">Company</h2>
                        <div className="Company1">
                        <div className="Company ">
                        <a className="homecontext about"> About Us</a>
                        <a className="homecontext">Careers</a>
                        <a className="homecontext">Blog</a>
                        </div>
                        <div className="Company usa">
                        <a className="homecontext"> News</a>
                        <a className="homecontext">Partners</a>
                        <a className="homecontext">Contact</a>
                        </div>
                        </div>
                    </div>
                       
                      
                    </div>
                    <div className="homemapdiv">
                        <div className="homemapdivleft">
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

                            <div className="Company usa">
                                <h2 className="homeheader">Social Media </h2>
                                <div className="social">
                                    <img className="homeiocn" src={facebook} alt="facebook" />
                                    <img className="homeiocn" src={linkedin} alt="facebook" />
                                    
                                </div>
                            </div>

                        </div>
                        <div className="mapdiv">   <img src={map} className="map" alt="map" />
                        </div>

                    </div>
                    <div className="homefooter">
                        <h4 className="homecontext footer">© 2021 Borgos Technologies Pvt Ltd    </h4>
                    </div>
                </div>

            </div>
        </div>




            : <div className="Businessdiv">

                <div className="businesscontent1">
                    <h2 className="businessheader11">TRANSFORM YOUR</h2>
                    <h2 className="businessheader22">BUSINESS WITH BORGOS</h2>
                    <h5 className="businesscontext1">Let us apply our
                    tried-and-tested capabilities to your business objectives.
                    To learn more about our outsourcing services tailored to
 your unique needs or out-of-the-box solutions, please write to us at info@borgos.in</h5>
                </div>

                <img src={BorgosTree2} className="treebg2" alt="" />
                <img src={AdBackground} className="AdBackground" alt="" />
                
                <div className="home1">
                    <img src={home} className="homebg1" alt="home" />
                    <div className="homecontain1">

                        <div className="Homeheader1">
                            <img className="Logo1" src={Logo} alt="logo" />
                            <div className="topdash" />
                        </div>
                        <div className="homeinfo">

                            <div className="Company usa">
                                <h2 className="homeheader1">USA</h2>
                                <h4 className="homecontext1">89 Main Street, Suite 205
                                Medway, Massachusetts 02053
                                Phone:+1 (508)-458-5485
                        E-mail: sales@borgos.in</h4>
                            </div>
                            <div className="Company usa">
                                <h2 className="homeheader1">Bengaluru</h2>
                                <h4 className="homecontext1">91 Springboard Business Hub Pvt Ltd,
                                512/10, Dhaaruni Commercial,
                                Service Lane, Outer Ring Road,
                                Mahadevapura, Bengaluru-560048
                                Phone: +91-9435343434
                        E-mail: sales@borgos.in</h4>
                            </div>
                            <div className="Company usa">
                                <h2 className="homeheader1">Guwahati</h2>
                                <h4 className="homecontext1">167, Opp NRL Petrol Pump,
                                Jayanagar, Sixmile, Guwahati 781022
                                Phone: +91-6002200816, +91-361-7961597
                        E-mail: sales@borgos.in</h4>
                            </div>

                        </div>

                        <div className="mapdiv1">
                            <img src={map} className="map" alt="map" />
                        </div>
                        <div className="homeinfo1">

                       
                            <div className="Company">
                        <h2 className="homeheader1">Company</h2>
                        <div className="Company1">
                        <div className="Company ">
                        <a className="homecontext1 about"> About Us</a>
                        <a className="homecontext1">Careers</a>
                        <a className="homecontext1">Blog</a>
                        </div>
                        <div className="Company usa">
                        <a className="homecontext1"> News</a>
                        <a className="homecontext1">Partners</a>
                        <a className="homecontext1">Contact</a>
                        </div>
                        </div>
                    </div>
                            <div className="Company usa">
                                <h2 className="homeheader1">Social Media </h2>
                              <div className="social2">
                                <img className="homeiocn1" src={facebook} alt="facebook" />
                                <img className="homeiocn1" src={linkedin} alt="facebook" />
                               
                            </div>
                            </div>


                        </div>
                    </div>

                    <div className="homefooter1">
                    <h4 className="homecontext1 footer">© 2021 Borgos Technologies Pvt Ltd    </h4>
                </div>
                </div>

            </div>}
        </div>
    )
}

export default Business;