import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
            <div className='row'>
                <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last'>
                    <h1 className='display-2'>Online Payment Made <br/>Easy For You.</h1>
                    <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolore mollitia tempora in voluptatibus placeat? Alias fugit, beatae nobis distinctio sit dolor libero, suscipit voluptas repellat maxime, soluta eum eos?</p>
                    <h3>Get early access for You</h3>
                    <div className='input-group mt-3'>
                        <input type="text" className='rounded-pill w-75 me-3 p-2 form-control-text' placeholder='Enter your Email'/> 
                        <div className='input-group-button'>Get it now</div>   
                    </div>
                </div>
                {/* Main header right side */}
                <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-lg-last order-first'>
                    <img src="./images/working.jpg" alt="hero1" className='img-fluid' />
                    <img src="./images/hero4.jpg" alt="hero4" className='img-fluid main-hero-img2' />
                </div>
            </div>
        </section>
    </header>
    </>
  )
}

export default Header