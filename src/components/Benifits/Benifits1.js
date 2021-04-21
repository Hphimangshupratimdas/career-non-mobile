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

const Benifits1 = () => {
    return (

        <div className="Benefits">
            <div className="Benefit">
                <h3 className="Benefitheader">BENEFITS</h3>
                <h2 className="Benefitcontent">
                   
                    <li className="benefititems">
                    <img src={bf1} className="bf" alt="icon" />
                        Flexible leave policy – You don’t have to
        look at your Leave balance when planning that road-trip or attending a friend’s wedding.</li>
                    
                   
        <li className="benefititems">
        <img src={bf2} className="bf" alt="icon" />
        Flexible work hours and telecommuting –
        No prior approvals needed. Just keep your immediate team and customers informed.</li>
                   
                    <li className="benefititems" > 
                    <img src={bf3} className="bf" alt="icon" />
                    Learn a new skill every six months. Sponsored professional certifications for job-relevant skills.</li>
                   
                    
                    <li className="benefititems"> 
                    <img src={bf4} className="bf" alt="icon" />
                    Medical insurance – You and your family get Rs.5,00,000 coverage for hospitalization. Borgos pays the policy premium.</li>
                   
                    <li className="benefititems">
                    <img src={bf5} className="bf" alt="icon" />
                     Free food, cab rides, and gym allowance. More lifestyle benefits to come…</li>
                   
                    <li className="benefititems">
                    <img src={bf6} className="bf" alt="icon" />
                     Bring your own ideas – If you have a cool idea for a product that Borgos decides to invest in, you will get a stake in it.</li>
                  
                    <li className="benefititems"> 
                    <img src={bf7} className="bf" alt="icon" />
                    1 day special leave for birthday or anniversary</li>
                   
                    <li className="benefititems">
                    <img src={bf8} className="bf" alt="icon" />
                     Choose your colleagues using our employee referral programme with cash bonus per hire.</li>
                   
                    <li className="benefititems">
                    <img src={bf9} className="bf" alt="icon" />
                    Non-discrimination policy & Equal Pay.</li>
                   
                    <li className="benefititems"> 
                    <img src={bf10} className="bf" alt="icon" />
                    Maternity and paternity leave.</li>
        
                    <li className="benefititems">
                    <img src={bf11} className="bf" alt="icon" />
                     Re-Location Assist.</li>
                </h2>
            </div>

            <img className="benefitimgdiv" src={Benefitimg_5} alt="img" />




        </div>

    )
}
export default Benifits1;