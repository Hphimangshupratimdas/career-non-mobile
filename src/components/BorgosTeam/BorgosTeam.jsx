import React from 'react';
import './BorgosTeam.css'
import Bannerimg from '../images/Bannerimg.png';
import BannerImage from '../images/BannerImage.jpg';
import useWindowDimensions from '../Tools/Windowsize';
const BorgosTeam = () => {
    const { height, width } = useWindowDimensions();
    const ratio = width / height;

    return (
        <div className="Borgosdiv2">

            {ratio <= 1.2 ?
                <div className="borgosteambanner2">
                    <img src={Bannerimg} className="teamimg2" alt="banner" />
                    <div className= "teamcontent2">
                        <h1 className= "teamheader1">FIND YOUR PLACE </h1>
                        <h2 className="teamheader3">IN BORGOS TEAM</h2>
                        <h5 className="teamContext2">At Borgos Technologies, we’ve worked hard
                        to not only deliver industry-leading IT Outsourcing solutions,
                        but to build a culture of innovation and teamwork.
                        We employ a team of highly accomplished,
                        passionate technologists who contribute to the overall
                        success of our company and our customers — and we’re growing.
    We have opportunities across all disciplines, levels and locations</h5>
                    </div>
                </div> : <div className="borgosteambanner">
                <img src={BannerImage} className="teamimg" alt="banner" />
                <div className= "teamcontent">
                <h1 className= "teamheader">FIND YOUR PLACE </h1>
                <h2 className="teamheader2">IN BORGOS TEAM</h2>
                <h5 className="teamContext">At Borgos Technologies, we’ve worked hard
                to not only deliver industry-leading IT Outsourcing solutions,
                but to build a culture of innovation and teamwork.
                We employ a team of highly accomplished,
                passionate technologists who contribute to the overall
                success of our company and our customers — and we’re growing.
We have opportunities across all disciplines, levels and locations</h5>
            </div>
                </div>
            
            
            
            
            
            
            
            
            }



        </div>
    )

}
export default BorgosTeam;