import React from 'react';
import './Opening.css';
import Drop from './Drop';
import useWindowDimensions from '../Tools/Windowsize';



const Openings = () => {
    const { height, width } = useWindowDimensions();
    const ratio=width/height;

    return (
        <div className="openingdiv">
            <div className="openingheader">
                <h1 className={ratio>=1.2?"openingheader1":"openingheader3"}>CURRENT</h1>
                <h1 className={ratio>=1.2?"openingheader2":"openingheader4"}>PROFILES</h1>
            </div>
            <h3 className={ratio>=1.2?"openingtext":"openingtext1"}>
                We have exciting opportunities available across all levels,
                disciplines and locations. Browse our list of current openings.
                If you are interested in joining our dynamic team,
         please send us your updated resume to<a className="email"> jobs@borgos.in</a>
            </h3>
            <Drop />

        </div>
    )
}

export default Openings;