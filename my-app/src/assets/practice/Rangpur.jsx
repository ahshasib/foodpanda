
import React,{useEffect} from 'react';
import Fooditemcard from './Fooditemcard';
import Fooditemcardtop from './Fooditemcardtop';
import Fooditemcardend from './Fooditemcardend';
import { NavLink } from 'react-router-dom';

function Rangpur() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
}, []);
  
  return (
    <div>
        <Fooditemcardtop  placetitel="Rangpur"/>


        <div className="container">
        <div className="row">
          {[
            { img: "image/nagabargue.jpg", titel: "Twin Rooftop Restaurant", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/Snacks.jpg", titel: "The Organica (Park Er Mor)", p: "Snacks", toptitle: "20% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food3.jpg", titel: "Choloman Mini Chinese", p: "Kabab", toptitle: "33% OFF.", toptitle2: "Welcome gift: free de..." },

            { img: "image/hobekichu.jpg", titel: "Panchforon", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food7.jpg", titel: "Food Making", p: "Fast Food", toptitle: "Combo Offer", toptitle2: "Welcome gift: free de..." },

            { img: "image/food1.jpg", titel: "Halal Food", p: "Fast Food", toptitle: "20% off min ৳200.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food4.jpg", titel: "Pandemic Cafe ", p: "Fast Food", toptitle: "10% off min ৳500.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food5.jpg", titel: "Maliha's Kitchen ", p: "Fast Food", toptitle: "10% off min ৳100.", toptitle2: "Welcome gift: free de..." },

            { img: "image/burderburger.jpg", titel: " Feel Hungry ", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },
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

export default Rangpur