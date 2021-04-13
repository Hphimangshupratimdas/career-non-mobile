import React from 'react';
import './BorgosTeam.css'
import BorgosteamBanner from '../images/BannerImage.png';
import useWindowDimensions from '../Tools/Windowsize';
const BorgosTeam=()=>{
    const { height, width } = useWindowDimensions();

return(<div className="Borgosdiv">
<div className="teamcontent">
<h1 className="teamheader">FIND YOUR</h1>
<h2 className="teamheader2">PLACE IN <br/>BORGOS TEAM</h2>
<h5 className="teamContext">At Borgos Technologies, we’ve worked hard 
to not only deliver industry-leading IT Outsourcing solutions, 
but to build a culture of innovation and teamwork. 
We employ a team of highly accomplished, 
passionate technologists who contribute to the overall 
success of our company and our customers — and we’re growing. 
We have opportunities across all disciplines, levels and locations</h5>


</div>
<div className="borgosteambanner">
<img src={BorgosteamBanner} className="teamimg" alt="banner"/>
</div>


</div>)

}
export default BorgosTeam;