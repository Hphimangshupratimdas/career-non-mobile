import React from 'react';
import bf1 from '../images/bf1.png';
import bf2 from '../images/bf2.png';
import bf3 from '../images/bf3.png';
import bf4 from '../images/bf4.png';
import bf5 from '../images/bf5.png';
import bf6 from '../images/bf6.png';
import bf7 from '../images/bf7.png';
import bf8 from '../images/bf8.png';
import bf9 from '../images/bf9.png';
import bf10 from '../images/bf10.png';
import bf11 from '../images/bf11.png';
import Benefitimg_5 from '../images/BenefitsImage_5.png';

const Benifits1=()=>
{
    return(

        <div className="Benefits">
        <div className="Benefit">
        <h3 className="Benefitheader">BENEFITS</h3>
        <h2 className="Benefitcontent">
        <img src={bf1} className="bf" alt="icon"/>
        <li className="benefititems">
        Flexible leave policy – You don’t have to 
        look at your Leave balance when planning that road-trip or attending a friend’s wedding.</li>
        <img src={bf2} className="bf" alt="icon"/>
        <li className="benefititems">Flexible work hours and telecommuting – 
        No prior approvals needed. Just keep your immediate team and customers informed.</li>
        <img src={bf3} className="bf" alt="icon"/>
        <li className="benefititems" > Learn a new skill every six months. Sponsored professional certifications for job-relevant skills.</li>
        <img src={bf4} className="bf" alt="icon"/>
        <li className="benefititems"> Medical insurance – You and your family get Rs.5,00,000 coverage for hospitalization. Borgos pays the policy premium.</li>
        <img src={bf5} className="bf" alt="icon"/>
        <li className="benefititems"> Free food, cab rides, and gym allowance. More lifestyle benefits to come…</li>
        <img src={bf6} className="bf" alt="icon"/>
        <li className="benefititems"> Bring your own ideas – If you have a cool idea for a product that Borgos decides to invest in, you will get a stake in it.</li>
        <img src={bf7} className="bf" alt="icon"/>
        <li className="benefititems"> 1 day special leave for birthday or anniversary</li>
        <img src={bf8} className="bf" alt="icon"/>
        <li className="benefititems"> Choose your colleagues using our employee referral programme with cash bonus per hire.</li>
        <img src={bf9} className="bf" alt="icon"/>
        <li className="benefititems">Non-discrimination policy & Equal Pay.</li>
        <img src={bf10} className="bf" alt="icon"/>
        <li className="benefititems"> Maternity and paternity leave.</li>
        <img src={bf11} className="bf" alt="icon"/>
        <li className="benefititems"> Re-Location Assist.</li>
        </h2>
        </div>
        
    <img className="benefitimgdiv" src={ Benefitimg_5} alt="img"/>
    
    
    

        </div>

    )
}
export default Benifits1;