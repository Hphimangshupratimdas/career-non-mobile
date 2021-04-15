import React from 'react';
import './BorgosTeam.css'
import BorgosteamBanner from '../images/BannerImage.png';
import Bannerimg from '../images/Bannerimg.png';
import useWindowDimensions from '../Tools/Windowsize';
const BorgosTeam=()=>{
    const { height, width } = useWindowDimensions();
    const ratio=width/height;

return(<div className={ratio>=1.2?"Borgosdiv":"Borgosdiv2"}>
{ratio<=1.2?<div className="borgosteambanner2">
 <img src={Bannerimg} className= "teamimg2" alt="banner"/>
 <div className={ratio>=1.2?"teamcontent":"teamcontent2"}>
<h1 className={ratio>=1.2?"teamheader":"teamheader1"}>FIND YOUR</h1>
<h2 className={ratio>=1.2?"teamheader2":"teamheader3"}>PLACE IN <br/>BORGOS TEAM</h2>
<h5 className={ratio>=1.2?"teamContext":"teamContext2"}>At Borgos Technologies, we’ve worked hard 
to not only deliver industry-leading IT Outsourcing solutions, 
but to build a culture of innovation and teamwork. 
We employ a team of highly accomplished, 
passionate technologists who contribute to the overall 
success of our company and our customers — and we’re growing. 
We have opportunities across all disciplines, levels and locations</h5>


</div>
</div>:""}
{ratio>=1.2?
<div className={ratio>=1.2?"teamcontent":"teamcontent2"}>
<h1 className={ratio>=1.2?"teamheader":"teamheader1"}>FIND YOUR</h1>
<h2 className={ratio>=1.2?"teamheader2":"teamheader3"}>PLACE IN <br/>BORGOS TEAM</h2>
<h5 className={ratio>=1.2?"teamContext":"teamContext2"}>At Borgos Technologies, we’ve worked hard 
to not only deliver industry-leading IT Outsourcing solutions, 
but to build a culture of innovation and teamwork. 
We employ a team of highly accomplished, 
passionate technologists who contribute to the overall 
success of our company and our customers — and we’re growing. 
We have opportunities across all disciplines, levels and locations</h5>


</div>:""}

{ratio>1.2?<div className="borgosteambanner">
 <img src={BorgosteamBanner} className="teamimg" alt="banner"/>
</div>
:""}


</div>)

}
export default BorgosTeam;