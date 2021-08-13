import React from 'react';
import Common from './Common';

import web from "../src/images/computer.jpg"


const About = () =>{
    return(

        <>
          
            <Common
           name="Grow your businees with"
           imgsrc={web}
           btn="/Contact"

            />   
           
        </>
    )
}

export default About;