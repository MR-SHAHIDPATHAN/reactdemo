import React from 'react';
import Card from './Card';
import Sdata from './Sdata';



const Service = () =>{

    return(
        <>
        {

            <div className="my-5">
        <h1 className="text-center "> Our services</h1>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto mt-4">
                    <div className="row gy-4">
                        
        {                Sdata.map((val , index)=>{
                              return <Card
                               key={index}
                                id={index}
                                 imgsrc={val.imgsrc}
                                  title ={val.title}
                                                    />

})
}
                        
                        

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
      

        }
            
        </>
        
        
        )
}

export default Service;


