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

           
                <div className= {ratio >= 1.2 ?"borgosteambanner":"borgosteambanner2"}>
                    <img src={BannerImage} className= {ratio >= 1.2 ?"teamimg":"teamimg2"} alt="banner" />
                    <div className= {ratio >= 1.2 ?"teamcontent":"teamcontent2"}>
                        <h1 className={ratio >= 1.2 ? "teamheader":"teamheader1"}>FIND YOUR PLACE </h1>
                        <h2 className={ratio >= 1.2 ?"teamheader2":"teamheader3"}>IN BORGOS TEAM</h2>
                       
                    </div>
                </div> 
            
            
            



        </div>
    )

}
export default BorgosTeam;