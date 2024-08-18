import React from 'react'
import Navbar from './Navbar';
import "./Cssstyle/Fooditemcardtop.css"
import { LanguageProvider } from './LanguageContext';

function Fooditemcardtop(props) {
  return (
    <div>
        <LanguageProvider>
        <Navbar />
        </LanguageProvider>
       
        
        <div className="pandashorttoppage">
        
        
            <div className="Container shortpandacontent">
            
            <h2>Food Delivery from {props.placetitel}’s Best Restaurants</h2>
                <img src="image/shortpanda.png" alt="" />
            </div>
        </div>

        <div className="container foodcardcontainer">
          <div>
          <button className='btn homepagetextbutton'>
            Homepage 
            </button>
            <p><i className="bi bi-caret-right-fill"></i>{props.placetitel}</p>
          </div>
            
            <h2>All restaurants</h2>
        </div>    
    </div>
  )
}

export default Fooditemcardtop