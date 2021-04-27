import React, { useState } from 'react';
import bf111 from '../images/bf111.png';
import bf222 from '../images/bf222.png';
import bf333 from '../images/bf333.png';
import bf444 from '../images/bf444.png';
import bf555 from '../images/bf555.png';
import bf666 from '../images/bf666.png';
import bf777 from '../images/bf777.png';
import bf888 from '../images/bf888.png';
import bf999 from '../images/bf999.png';
import bf1000 from '../images/bf1000.png';
import bf1111 from '../images/bf1111.png';
import BenefitsImage_3 from '../images/BenefitsImage_3.jpg';

const Benifit2 = () => {
  const [seeall, setSeeall] = useState(false)
  return (
    
      <div className="Benefits1">
        <h3 className="Benefitheader2">BENEFITS</h3>

        {seeall === true ? <div className="Benefitcontent3">
          <div className="leave">
            <img src={bf111} className="bf1" alt="icon" />
            <h2 className="benefititems1">
              Flexible leave policy – You don’t have to look at your Leave balance when planning that road-trip or attending a friend’s wedding.</h2>
          </div>
          <div className="work">
            <img src={bf222} className="bf1" alt="icon" />
            <h2 className="benefititems1">Flexible work hours and telecommuting – No prior approvals needed. Just keep your immediate team and customers informed.
            </h2>
          </div>
          <div className="learn">
            <img src={bf333} className="bf2" alt="icon" />
            <h2 className="benefititems1" >Learn a new skill every six months. Sponsored professional certifications for job-relevant skills.</h2>
          </div>
          <div className="learn">
          <img src={bf888} className="bf2" alt="icon" />
          <h2 className="benefititems1" >Choose your colleagues using our employee referral programme with cash bonus per hire.</h2>
        </div>
          <div className="learn">
            <img src={bf444} className="bf2" alt="icon" />
            <h2 className="benefititems1" >Medical insurance – You and your family get Rs.5,00,000 coverage for hospitalization. Borgos pays the policy premium.
            </h2>
          </div>

         
          
          <div className="learn">
            <img src={bf666} className="bf2" alt="icon" />
            <h2 className="benefititems1" >Bring your own ideas – If you have a cool idea for a product that Borgos decides to invest in, you will get a stake in it.</h2>
          </div>
         
          <div className="learn">
            <img src={bf777} className="bf2" alt="icon" />
            <h2 className="benefititems1" >1 day special leave for birthday or anniversary
            </h2>
          </div>
          <div className="learn">
          <img src={bf555} className="bf2" alt="icon" />
          <h2 className="benefititems1" > Free food, cab rides, and gym allowance. More lifestyle benefits to come…
          </h2>
        </div>
          <div className="learn">
            <img src={bf999} className="bf2" alt="icon" />
            <h2 className="benefititems1" >Non-discrimination policy & Equal Pay.</h2>
          </div>
          <div className="learn">
            <img src={bf1000} className="bf2" alt="icon" />
            <h2 className="benefititems1" >Maternity and paternity leave</h2>
          </div>
          <div className="learn">
            <img src={bf1111} className="bf2" alt="icon" />
            <h2 className="benefititems1" >Re-Location Assist.</h2>
          </div>
        </div>
          : <div className="Benefitcontent3">
            <div className="leave">
              <img src={bf111} className="bf1" alt="icon" />
              <h2 className="benefititems1">
                Flexible leave policy – You don’t have to
       look at your Leave balance when planning that road-trip or attending a friend’s wedding.</h2>
            </div>
            <div className="work">
              <img src={bf222} className="bf1" alt="icon" />
              <h2 className="benefititems1">Flexible work hours and telecommuting –
        No prior approvals needed. Just keep your immediate team and customers informed.</h2>
            </div>
            <div className="learn">
              <img src={bf333} className="bf2" alt="icon" />
              <h2 className="benefititems1" > Learn a new skill every six months. Sponsored professional certifications for job-relevant skills.</h2>
            </div>
          </div>
         }
         { seeall == false ?   <button className="seeall" onClick={() => setSeeall(true)}>VIEW ALL</button>:""}
         { seeall == false ? <img className="benefitimgdiv1" src={BenefitsImage_3} alt="img" /> : <img className="benefitimgdiv2" src={BenefitsImage_3} alt="img" />}
   
      </div>

     


    
  )
}


export default Benifit2;