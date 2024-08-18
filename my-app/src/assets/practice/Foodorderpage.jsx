import React,{createContext,useState,useEffect} from 'react';
import { PageIcon, DimondIcon, Fireicon } from './Pageicon';
import Detail from './Detailproduct';
import "./Cssstyle/Foodorderpage.css";
import Navbar from './Navbar';
import Cart from './Cart';
import { useLocation } from 'react-router-dom';
import Selectfoodcart from './Selectfoodcart';
import { LanguageProvider } from './LanguageContext';
import { CartProvider } from 'react-use-cart';


function Foodorderpage() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
}, []);
  

  const location = useLocation();
  const { img, titel, p, toptitle, toptitle2 } = location.state || {};
  
  return (
    
    <div>
        
       <LanguageProvider>
       <Navbar />
       </LanguageProvider>
      
      <CartProvider>
        
      <div className="foodordertopfullpage">
        <div className="container">
          <div className="top3button">
            <button className='btn'>Homepage</button>
            <button className='btn'><i className="bi bi-caret-right-fill"></i> Khulna</button>
            <button className='btn'><i className="bi bi-caret-right-fill"></i>{titel}</button>
          </div>
          <div className="foodorderpagetop">
            <div className="foodorderpagetopimage">
              <img src={img} alt={titel} />
            </div>
            <div className="foodorderpagetopimagetext">
              <p>Dessert . Burgers . Snacks . Western</p>
              <h2>{titel}</h2>
              <div className="foodorderpagetopimagetext1">
                <p className='topresturant'><i className="bi bi-award"></i>Top restaurant</p>
                <button className='btn freedeli'><i className="bi bi-bicycle"></i>Free delivery</button>
                <button className='btn'><i className="bi bi-bag-check"></i> TK 50 Minimum</button>
              </div>
              <div className="foodorderpagetopimagetext2">
                <p className='rating'><PageIcon color={"rgb(255, 111, 0)"} /><b>4.7/5</b>  (100+)</p>
                <button className='btn'>See reviews</button>
                <button className='btn'>More info</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="availabledeals">
        <div className="container">
          <h4>Available deals</h4>
          <div className='availabledealscontainer'>
            <div className="propandacard1">
              <h6><span><DimondIcon />PRO </span>15% off</h6>
              <p>Min. order Tk 50. and special savings for pandapro members</p>
            </div>
            <div className="propandacard2">
              <h6><img src="image/percentage.jpg" alt="" />15% off</h6>
              <p>Min. order Tk 50. Valid for all items. Auto applied.</p>
            </div>
            <div className="propandacard3">
              <h6><img src="image/percentage.jpg" alt="" />Tk 50 off (BKASH50)</h6>
              <p>Min. order Tk 550. Valid for all items. Use in cart.</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" contin">
        <div className="foodorderchooscardmain">
          <div className="leftfoodordercard">
            <h2><Fireicon color={"rgb(255, 111, 0)"} />Popular</h2>
            <p className='p'>Most ordered right now.</p>
            <div className="leftfoodcardjora">
              {
                Detail.map((currentelm, index) => (
                  <Selectfoodcart img={currentelm.img} name={currentelm.name}  price={currentelm.price} ingredent={currentelm.ingredent}  item={currentelm} key={index}/>
                ))
              }
            </div>
          </div>
        </div>
       
        <Cart />
        
      </div>
      </CartProvider>
     
    </div>
    
  );
}

export default Foodorderpage;
