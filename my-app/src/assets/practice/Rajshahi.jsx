
import React,{useEffect} from 'react';
import Fooditemcard from './Fooditemcard';
import Fooditemcardtop from './Fooditemcardtop';
import Fooditemcardend from './Fooditemcardend';
import { NavLink } from 'react-router-dom';

function Rajshahi() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
}, []);
  

  return (
    <div>
        <Fooditemcardtop  placetitel="Rajshahi"/>

        <div className="container">
        <div className="row">
          {[
            { img: "image/Snacks.jpg", titel: "Jhulon Bari Restora", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/nagabargue.jpg", titel: "Mayer Doa Foods Corner", p: "Snacks", toptitle: "20% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/sadapasta.jpg", titel: "Crowd Zone", p: "Kabab", toptitle: "33% OFF.", toptitle2: "Welcome gift: free de..." },

            { img: "image/hobekichu.jpg", titel: "Panchforon", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food7.jpg", titel: "Burger Hut - Rajshahi", p: "Fast Food", toptitle: "Combo Offer", toptitle2: "Welcome gift: free de..." },

            { img: "image/Pizza.jpg", titel: "Kalai House Rajshahi", p: "Fast Food", toptitle: "20% off min ৳200.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food4.jpg", titel: "Bangla Tiffin ", p: "Fast Food", toptitle: "10% off min ৳500.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food5.jpg", titel: "Kacchi Express ", p: "Fast Food", toptitle: "10% off min ৳100.", toptitle2: "Welcome gift: free de..." },

            { img: "image/kalacheck.jpg", titel: " Midas Restaurant - 3 ", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },
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

export default Rajshahi