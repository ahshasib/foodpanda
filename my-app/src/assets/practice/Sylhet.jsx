
import React,{useEffect} from 'react';
import Fooditemcard from './Fooditemcard';
import Fooditemcardtop from './Fooditemcardtop';
import Fooditemcardend from './Fooditemcardend';
import { NavLink } from 'react-router-dom';

function Sylhet() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
}, []);
  
  return (
    <div>
        <Fooditemcardtop  placetitel="Sylhet"/>


 
        <div className="container">
        <div className="row">
          {[
            { img: "image/capachino.jpg", titel: "Habib Restaurant", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/Snacks.jpg", titel: "Amader (Cafe Shunno)", p: "Snacks", toptitle: "20% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/juich.jpg", titel: "Juice Plus", p: "Kabab", toptitle: "33% OFF.", toptitle2: "Welcome gift: free de..." },

            { img: "image/hobekichu.jpg", titel: "Tabaq - Catering", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/lakabab.jpg", titel: "Palki Restaurant", p: "Fast Food", toptitle: "Combo Offer", toptitle2: "Welcome gift: free de..." },

            { img: "image/Cakes.jpg", titel: "Royal Kitchen", p: "Fast Food", toptitle: "20% off min ৳200.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food4.jpg", titel: "CTG Pet Shop ", p: "Fast Food", toptitle: "10% off min ৳500.", toptitle2: "Welcome gift: free de..." },

            { img: "image/akbati.jpg", titel: "Kacchi Express ", p: "Fast Food", toptitle: "10% off min ৳100.", toptitle2: "Welcome gift: free de..." },

            { img: "image/burderburger.jpg", titel: " Sky Dine ", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },
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

export default Sylhet