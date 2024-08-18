import React,{useContext} from 'react'
import "./Cssstyle/Place.css"
import {NavLink} from "react-router-dom"
import { LanguageContext } from './LanguageContext';

function Place() {
  const context = useContext(LanguageContext);
  

  // const { language } = useContext(LanguageContext);

  const { language } = context || {};
  return (
    <div className='bunty'>
      <div className='curdmainheading'>
        <h1>{language === 'bn' ? ' আমাদেরকে আপনার শহরে পাবেন' : "Find us in these cities and many more!"}</h1>
      </div>
      <div className="container curdmain">
        <div className="row placerow">
          <div className="col-md-2 card placecard">
            <NavLink to="/dhaka" className="navlink">
              <img src="image/dhaka.jpg" className='card-img' alt="" />
              <button className='btn'>Dhaka</button>
            </NavLink>
          </div>
          <div className="col-md-2 card placecard">
            <NavLink to="/chottogram" className="navlink">
              <img src="image/chittagong.jpg" alt="" />
              <button className='btn'>Chittagong</button>
            </NavLink>
          </div>
          <div className="col-md-2 card placecard">
            <NavLink to="/bagerhat" className="navlink">
              <img src="image/bagerhat.jpg" alt="" />
              <button className='btn'>Bagerhat</button>
            </NavLink>
          </div>
          <div className="col-md-2 card placecard">
            <NavLink to="/borisal" className="navlink">
              <img src="image/borisal.jpg" alt="" />
              <button className='btn'>Barisal</button>
            </NavLink>
          </div>
          <div className="col-md-2 card placecard">
            <NavLink to="/khulna" className="navlink">
              <img src="image/khulna.jpg" alt="" />
              <button className='btn'>Khulna</button>
            </NavLink>
          </div>
          <div className="col-md-2 card placecard">
            <NavLink to="/coxbazar" className="navlink">
              <img src="image/Coxsbazar.jpg" alt="" />
              <button className='btn'>Cox's Bazar</button>
            </NavLink>
          </div>
          <div className="col-md-2 card placecard">
            <NavLink to="/pabna" className="navlink">
              <img src="image/pabna.jpg" alt="" />
              <button className='btn'>Pabna</button>
            </NavLink>
          </div>
          <div className="col-md-2 card placecard">
            <NavLink to="/rajshahi" className="navlink">
              <img src="image/rajshahi.jpg" alt="" />
              <button className='btn'>Rajshahi</button>
            </NavLink>
          </div>
          <div className="col-md-2 card placecard">
            <NavLink to="/rangpur" className="navlink">
              <img src="image/rangpur.jpg" alt="" />
              <button className='btn'>Rangpur</button>
            </NavLink>
          </div>
          <div className="col-md-2 card placecard">
            <NavLink to="/sirajganj" className="navlink">
              <img src="image/sirajganj.jpg" alt="" />
              <button className='btn'>Sirajganj</button>
            </NavLink>
          </div>
          <div className="col-md-2 card placecard">
            <NavLink to="/sylhet" className="navlink">
              <img src="image/sylhet.jpg" alt="" />
              <button className='btn'>Sylhet</button>
            </NavLink>
          </div>
          <div className="col-md-2 card placecard">
            <NavLink to="/bandarban" className="navlink">
              <img src="image/bandarban.jpg" alt="" />
              <button className='btn'>Bandarban</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Place
