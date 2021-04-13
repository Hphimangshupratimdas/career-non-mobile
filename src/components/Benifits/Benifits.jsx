import React from 'react';
import './Benifits.css';
import Benefitimg_5 from '../images/BenefitsImage_5.png';
const Benefits=()=>
{
    return(
        <div className="Benefits">
        <div className="Benefit">
        <h3 className="Benefitheader">BENEFITS</h3>
       <h2 className="Benefitcontent"> <li >Flexible leave policy – You don’t have to 
        look at your Leave balance when planning that road-trip or attending a friend’s wedding.</li>
        <li >Flexible work hours and telecommuting – 
        No prior approvals needed. Just keep your immediate team and customers informed.</li>
        <li >Learn a new skill every six months. Sponsored professional certifications for job-relevant skills.</li>
        <li>Medical insurance – You and your family get Rs.5,00,000 coverage for hospitalization. Borgos pays the policy premium.</li>
        <li>Free food, cab rides, and gym allowance. More lifestyle benefits to come…</li>
        <li>Bring your own ideas – If you have a cool idea for a product that Borgos decides to invest in, you will get a stake in it.</li>
        <li>1 day special leave for birthday or anniversary</li>
        <li>Choose your colleagues using our employee referral programme with cash bonus per hire.</li>
        <li>Non-discrimination policy & Equal Pay.</li>
        <li>Maternity and paternity leave.</li>
        <li>Re-Location Assist.</li></h2>
        </div>
        
        <img className="benefitimgdiv" src={ Benefitimg_5} alt="img"/>
      

        </div>
    )
}
export  default Benefits;