import React from 'react'

import Download from  './Download';
import Navbar from './Navbar';
import Place from './Place';
import Footer from './Footer';
import Chef from './Chef';
import Pandapage from './Pandapage';
import Officelunch from './Officelunch';
import Foodorderpage from './Foodorderpage';
import {  LanguageProvider } from './LanguageContext';


function Home() {
  
  
 

  return (
  
    <div>
     
   <LanguageProvider>
     
      <Navbar/>
      <Pandapage />
      <Chef />
      <Place />
      <Download />
      <Officelunch />
      <Footer />  
  </LanguageProvider> 
  

    </div>
    
  )
}

export default Home