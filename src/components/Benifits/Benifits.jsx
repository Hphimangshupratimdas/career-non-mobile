import React,{useState} from 'react';
import './Benifits.css';
import Benifits1 from './Benifits1';
import Benifits2 from './Benifits2';
import useWindowDimensions from '../Tools/Windowsize';
const Benefits=()=>
{  const { height, width } = useWindowDimensions();

const ratio=width/height;
    return(
      <div>
      {ratio>=1.2?
    <Benifits1/>:<Benifits2/>}
    
      </div>
    )
}
export  default Benefits;