import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/computer.jpg"


const Common = (props) =>{

    return (
        <>
                <section className="section_header d-flex justify-content-center align-items-center ">

                <div className="container-fluid">
                    <div className="row">

                    <div className="parent-div d-flex justify-content-center
                      align-items-center ">

                    <div className="col_div d-flex flex-column align-items-start mx-5 my-4 ">

                    <div className="col-10 mx-auto col-lg-5 col-md-5  ">

                    <h1 className="header"> {props.name} <strong>MR.SHAHIDTECH</strong></h1>
                    <p className="para"> We are the team of talented developer making website</p>

                    <NavLink className="getbtn" exact to={props.btn}> Get Started</NavLink>


                    </div>

                    </div>




                    {/* right hand section start  */}

                    <div className="col-div2 d-flex justify-content-center flex-column align-items-center">

                    <div className="col-10 col-lg-5 col-md-5 d-flex justify-content-center flex-column align-items-center ">

                    <img src={props.imgsrc} alt="hero-image" className="img-fluid" />


                    </div>
                    </div>















                    </div>















                    </div>
                </div>


               

                </section>

        </>

    )
}
export default Common;