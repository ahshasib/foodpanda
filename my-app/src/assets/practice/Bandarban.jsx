
import React ,{useEffect}from 'react';
import Fooditemcard from './Fooditemcard';
import Fooditemcardtop from './Fooditemcardtop';
import Fooditemcardend from './Fooditemcardend';
import { NavLink } from 'react-router-dom';

function Bandarban() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
}, []);
  

  return (
    <div>
        <Fooditemcardtop  placetitel="Bandarban"/>


        <div className="container">
        <div className="row">
          {[
            { img: "image/fridrice.jpg", titel: "NEW Town (Pandago)", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food1.jpg", titel: "Kala Hari", p: "Bargure", toptitle: "20% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food3.jpg", titel: "Barmuda", p: "Kabab", toptitle: "33% OFF.", toptitle2: "Welcome gift: free de..." },

            { img: "image/capachino.jpg", titel: "Coffee Club", p: "Coffee Shop", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food7.jpg", titel: "Basic Kneads", p: "Fast Food", toptitle: "Combo Offer", toptitle2: "Welcome gift: free de..." },

            { img: "image/food1.jpg", titel: "Halal Food", p: "Fast Food", toptitle: "20% off min ৳200.", toptitle2: "Welcome gift: free de..." },

            { img: "image/akbati.jpg", titel: "Humble Shop ", p: "Fast Food", toptitle: "10% off min ৳500.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food5.jpg", titel: "Kacchi Express ", p: "Fast Food", toptitle: "10% off min ৳100.", toptitle2: "Welcome gift: free de..." },

            { img: "image/food2.jpg", titel: " Feel Hungry ", p: "Fast Food", toptitle: "10% off min ৳50.", toptitle2: "Welcome gift: free de..." },
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

export default Bandarban