
import React ,{useEffect}from 'react';
import Fooditemcard from './Fooditemcard';
import Fooditemcardtop from './Fooditemcardtop';
import Fooditemcardend from './Fooditemcardend';
import { NavLink } from 'react-router-dom';

function Borisal() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
}, []);
  

  return (
    <div>
        <Fooditemcardtop  placetitel="Barisal"/>


       
      
      <div className="container">
        <div className="row">
          {[
            { img: "image/food5.jpg", titel: "Mister Treat", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/sadapasta.jpg", titel: "Pasta House", p: "Pasta", toptitle: "20% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food3.jpg", titel: "Nabab Biryani", p: "Kabab", toptitle: "33% OFF.", toptitle2: "Welcome gift: free de..." },

            { img: "image/lakabab.jpg", titel: "Panchforon", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food7.jpg", titel: "Dhaka Jinjira - Barishal", p: "Fast Food", toptitle: "Combo Offer", toptitle2: "Welcome gift: free de..." },

            { img: "image/food1.jpg", titel: "Abar Khabo Fuchka House", p: "Fast Food", toptitle: "20% off min ৳200.", toptitle2: "Welcome gift: free de..." },

            { img: "image/Pizza.jpg", titel: "Muslim Sweet and Restaurant ", p: "Fast Food", toptitle: "10% off min ৳500.", toptitle2: "Welcome gift: free de..." },

            { img: "image/nagabargue.jpg", titel: "Kacchi Express ", p: "Fast Food", toptitle: "10% off min ৳100.", toptitle2: "Welcome gift: free de..." },

            { img: "image/burderburger.jpg", titel: " Waffle N More ", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },
            // Add the rest of the items similarly
          ].map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <NavLink to= "/foodorderpage"
                state= {{ img: item.img, titel: item.titel, p: item.p, toptitle: item.toptitle, toptitle2: item.toptitle2  }} 
                className="navlink">

                <Fooditemcard 
                  img={item.img} 
                  titel={item.titel} 
                  p={item.p} 
                  toptitle={item.toptitle} 
                  toptitle2={item.toptitle2} 
                />
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      <Fooditemcardend />
    </div>
  )
}

export default Borisal