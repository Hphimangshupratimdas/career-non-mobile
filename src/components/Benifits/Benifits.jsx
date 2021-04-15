import React from 'react';
import './Benifits.css';
import Benefitimg_5 from '../images/BenefitsImage_5.png';
import BenefitsImage_3 from '../images/BenefitsImage_3.jpg';
import useWindowDimensions from '../Tools/Windowsize';
const Benefits=()=>
{  const { height, width } = useWindowDimensions();
const ratio=width/height;
    return(
        <div className={ratio>=1.2?"Benefits":"Benefits1"}>
        <div className={ratio>=1.2?"Benefit":"Benefit1"}>
        <h3 className={ratio>=1.2?"Benefitheader":"Benefitheader2"}>BENEFITS</h3>
       <h2 className={ratio>=1.2?"Benefitcontent":"Benefitcontent2"}> <li >Flexible leave policy – You don’t have to 
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
        
        {ratio>=1.2?  <img className="benefitimgdiv" src={ Benefitimg_5} alt="img"/>
        : <img className="benefitimgdiv1" src={  BenefitsImage_3} alt="img"/>}
      

        </div>
    )
}
export  default Benefits;