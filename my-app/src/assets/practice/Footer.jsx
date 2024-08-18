import React from 'react'
import "./Cssstyle/Footer.css"
import {NavLink} from "react-router-dom"
function Footer() {
  return (
    <div>
        <div className="container control">
            <div>
            <h6>© foodpanda</h6>
            </div>
            <div className="1stfooter">
                <button className='btn'>
                Help Center
                </button><br />

                <button className='btn'>
                Careers
                </button><br />

                <NavLink to="/sylhet" className="navlink">
                <button className='btn'>
                Areas delivered in Sylhet
                </button>
                </NavLink><br />

                <NavLink to="/dhaka" className="navlink">
                <button className='btn'>
                Areas delivered in Dhaka
                </button>
                </NavLink><br />

                <NavLink to="/coxbazar" className="navlink">
                <button className='btn'>
                Areas delivered in Cox's Bazar
                </button>
                </NavLink>
            </div>

            <div className="2ndfooter">
                <button className='btn'>
                Partner with Us
                </button><br />

                <NavLink to="/business">
                <button className='btn'>
                foodpanda for Business
                </button>
                </NavLink><br />

                <NavLink to ="/Place"> 
                <button className='btn'>
                All cities
                </button>
                </NavLink><br />

                <NavLink to="/borisal" className="navlink">
                <button className='btn'>
                Areas delivered in Barisal
                </button>
                </NavLink><br />

                <NavLink to="/khulna" className="navlink">
                <button className='btn'>
                Areas delivered in Khulna
                </button>
                </NavLink><br />

            </div>

            <div className="3rdfooter">
                <button className='btn'>
                Privacy Policy
                </button><br />

                <NavLink to="/rangpur" className="navlink">
                <button className='btn'>
                Areas delivered in Rangpur
                </button>
                </NavLink><br />

                <NavLink to="/business">
                <button className='btn'>
                pandago for business
                </button>
                </NavLink><br />

                <NavLink to="/chottogram" className="navlink">
                <button className='btn'>
                Areas delivered in Chottogram
                </button>
                </NavLink><br />

                <NavLink to="/bagerhat" className="navlink">
                <button className='btn'>
                Areas delivered in Bagerhat
                </button>
                </NavLink>
            </div>
            
        </div>
        <div className="lastfooter">
          <div className="footer1">
            <div className="footerlogo">
            <div className="footerbrandd">
                  <div className="forimagedivfooter">
                    <img src="image/panda.png" alt="" />
                    </div>
                    <div className='footername'>foodpanda</div>
            </div>
           
            </div>
            <div className="deliverylogo">
              <img src="image/deliveryhero.png" alt="" />
            </div>

           
          </div>

            <div className="footericon2">
              <button className='btn'><a href="https://www.facebook.com/foodpandaBangladesh/"><img src="image/fb.png" alt="" /></a></button>
              
            </div>

            </div>
           


            
    </div>
  )
}

export default Footer