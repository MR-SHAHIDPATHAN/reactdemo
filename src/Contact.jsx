import React from 'react';


const Contact = () =>{
    return (
        <>
            <div className="contact_page mt-4">
            <h1 className="text-center"> Contact Us </h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>

                        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label ">Full Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  
  
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
















                        </form>
                    </div>
                </div>
            </div>

            </div>

        </>
    )
}


export default Contact;