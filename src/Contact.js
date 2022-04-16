import React, { useState } from 'react'

const Contact = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({...userData, [name] : value});
    }
    // Validation
    const validate = (values) => {
        const formError = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.firstName) {
            formError.firstName = "firstname is required";
        }
        if (!values.lastName) {
            formError.lastName = "lastname is required";
        }
        if (!values.phone) {
            formError.phone = "phone number is required";
        }else if (values.phone.length !== 10) {
            formError.phone = "Number must be of 10 digits"
        }
        if (!values.email) {
            formError.email = "email is required";
        }else if (!regex.test(values.email)) {
            formError.email = "This is not a valid email format!"
        }
        if (!values.address) {
            formError.address = "address is required";
        }
        return formError;
    }
    
    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        setErrors(validate(userData));
       
        const {firstName, lastName, phone, email, address, message} = userData;
        if (firstName && lastName && phone && email && address && message) {
        
        const response = await fetch("https://reactfirebaseform-ad4ac-default-rtdb.firebaseio.com/userDataRecord.json",
        {
            method : "POST",
            Headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                firstName, lastName, phone, email, address, message
            })
        });
        if (response) {
            setUserData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                address: "",
                message: "",
            })
            alert("Data Stored");
        }
        // else{
        //     alert("Plz fill the data");
        // }
        }
        // else{
        //     alert("Plz fill the full form");
        // }
    }

  return (
    <>
    <section className='contactus-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='col-12 col-lg-5 contact-leftside'>
                            <h1 className="main-heading fw-bold">Connect With Our <br />Sales Team.</h1>
                            <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <figure>
                                <img src="./images/business-woman.jpg" alt="contactusimg" className='img-fluid'/>
                            </figure>
                        </div>
                        {/* right side contact form */}
                        <div className='col-12 col-lg-7 contact-rightside'>
                            <form method="POST">
                                <div className='row'>
                                    <div className='col-12 col-lg-6 contact-input-feild'>
                                        <input type="text" name='firstName' className='form-control' placeholder='First Name' value={userData.firstName} onChange={postUserData}/>
                                        <p style={{color:'red',fontSize:'15px'}}>{errors.firstName}</p>
                                    </div>
                                    
                                    <div className='col-12 col-lg-6 contact-input-feild'>
                                        <input type="text" name='lastName' className='form-control' placeholder='Last Name' value={userData.lastName} onChange={postUserData}/>
                                        <p style={{color:'red',fontSize:'15px'}}>{errors.lastName}</p>
                                    </div>
                                    
                                </div>
                                <div className='row'>
                                    <div className='col-12 col-lg-6 contact-input-feild'>
                                        <input type="number" name='phone' className='form-control' placeholder='Phone Number' value={userData.phone} onChange={postUserData}/>
                                    <p style={{color:'red',fontSize:'15px'}}>{errors.phone}</p>
                                    </div>
                                    <div className='col-12 col-lg-6 contact-input-feild'>
                                        <input type="email" name='email' className='form-control' placeholder='Email Id' value={userData.email} onChange={postUserData}/>
                                    <p style={{color:'red',fontSize:'15px'}}>{errors.email}</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 contact-input-feild'>
                                        <input type="text" name='address' className='form-control' placeholder='Add Address' value={userData.address} onChange={postUserData}/>
                                    <p style={{color:'red',fontSize:'15px'}}>{errors.address}</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 contact-input-feild'>
                                        <input type="text" name='message' className='form-control' placeholder='enter your message' value={userData.message} onChange={postUserData}/>
                                    </div>
                                </div>
                                <div class=" form-checkbox-style">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" className='main-hero-para'>I agree that the phonepay may contact me at the email address or phone number above</label>
                                </div>
                                <button type='submit' className='btn btn-style w-100' onClick={submitData}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>   
    </>
  )
}

export default Contact