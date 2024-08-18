import React, { useState } from 'react';

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./assets/practice/Home";

import Place from './assets/practice/Place';

import Business from './assets/practice/Business';
import Dhaka from './assets/practice/Dhaka';
import Chottogram from './assets/practice/Chottogram';
import Bagerhat from './assets/practice/Bagerhat';
import Borisal from './assets/practice/Borisal';
import Khulna from './assets/practice/Khulna';
import Coxbazar from './assets/practice/Coxbazar';
import Pabna from './assets/practice/Pabna';
import Rajshahi from './assets/practice/Rajshahi';
import Rangpur from './assets/practice/Rangpur';
import Sirajganj from './assets/practice/Sirajganj';
import Sylhet from './assets/practice/Sylhet';
import Bandarban from './assets/practice/Bandarban';
import Foodorderpage from './assets/practice/Foodorderpage';
import Cart from './assets/practice/Cart';

import Fooditemcard from './assets/practice/Fooditemcard';





function App() {
  

  return (
    <>
   
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home  />} />
    <Route path="/Place" element={<Place />} />
    <Route path="/business" element={<Business />} />
    <Route path="/dhaka" element={<Dhaka />} />
    <Route path="/chottogram" element={<Chottogram />} />
    <Route path="/bagerhat" element={<Bagerhat />} />
    <Route path="/borisal" element={<Borisal />} />
    <Route path="/khulna" element={<Khulna />} />
    <Route path="/Coxbazar" element={<Coxbazar />} />
    <Route path="/pabna" element={<Pabna />} />
    <Route path="/rajshahi" element={<Rajshahi />} />
    <Route path="/rangpur" element={<Rangpur />} />
    <Route path="/sirajganj" element={<Sirajganj />} />
    <Route path="/sylhet" element={<Sylhet />} />
    <Route path="/bandarban" element={<Bandarban />} />
    <Route path="/fooditem" element={<Fooditemcard />} />
    <Route path="/foodorderpage" element={<Foodorderpage  />}/>
    <Route  path = "/cart" element = {<Cart />}/>
   
   
 </Routes>
 
</BrowserRouter>

    </>
  )
}

export default App
