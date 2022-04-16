import React, { useState } from 'react';
import HowToUseApp from "./API/HowToUse";

const AboutUs = () => {
    const [aboutData ,setAboutData] = useState(HowToUseApp);
    
  return (
    <>
    {/* first section */}
        <section className='common-section our-services'>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 col-lg-5 text-center'>
                        <img src="./images/hero3.jpg" alt="AboutUsImg" />
                    </div>
                    {/* 1Section right side data  */}
                    <div className='col-12 col-lg-7 our-services-list ps-5'>
                        <h3 className='mini-title'>-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>
                        <h1 className='main-heading'>How to use the App?</h1>
                        {aboutData.map((curElem) => {
                            const {id, title, info} = curElem;
                            return(
                                <>
                                <div className='row our-services-info ps-3' key={id}>
                                    <div className='col-1 our-services-number'>{id}</div>
                                    <div className='col-10 our-services-data'>
                                        <h2>{title}</h2>
                                        <p className='main-hero-para'>{info}</p>
                                    </div>
                                </div>
                                </>
                                )
                            })};
                        <button className='btn-style btn-style-border my-5'>Learn more</button>
                    </div>
                </div>
            </div>
        </section>

        {/* second section  */}
        <section className='common-section our-services'>
            <div className='container mb-5'>
                <div className='row'>
                    {/* 2Section left side data  */}
                    <div className='col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column ps-lg-5'>
                        <h3 className='mini-title'>-- SUPPORT IN ANY LANGUAGES</h3>
                        <h1 className='main-heading'>World class support is <br/>available 24/7</h1>
                        {aboutData.map((curElem) => {
                            const {id, title, info} = curElem;
                            return(
                                <>
                                <div className='row our-services-info' key={id}>
                                    <div className='col-1 our-services-number'>{id}</div>
                                    <div className='col-10 our-services-data'>
                                        <h2>{title}</h2>
                                        <p className='main-hero-para'>{info}</p>
                                    </div>
                                </div>
                                </>
                                )
                            })};
                        <button className='btn-style btn-style-border my-5'>Learn more</button>
                    </div>
                    {/* 2Section right side img */}
                    <div className='col-12 col-lg-5 our-services-rightside'>
                        <img src="./images/callcenter.jpg" alt="callCenterImg" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutUs