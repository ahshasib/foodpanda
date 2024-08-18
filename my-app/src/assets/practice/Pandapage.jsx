import React,{useContext, useState} from 'react';

import {NavLink,useNavigate} from "react-router-dom";
import  "./Cssstyle/Pandapage.css";
import { LanguageContext } from './LanguageContext';


function Pandapage() {
  const { language } = useContext(LanguageContext);
  const [search,setSearch] = useState("");
  const navigate = useNavigate();


  const handlesearch = ()=>{
    if(search.toString()==="khulna" || search.toString() === "Khulna"){
      navigate("/Khulna");
    }
   
     else if(search.toString() ==="dhaka" || search.toString() === "Dhaka"){
        navigate("/Dhaka")
      }

      else if(search.toString() ==="bagerhat" || search.toString() === "Bagerhat"){
        navigate("/bagerhat")
      }

      else if(search.toString() ==="borisal" || search.toString() === "Borisal"){
        navigate("/borisal")
      }

      else if(search.toString() ==="chottogram" || search.toString() === "Chottogram" || search.toString() === "chittagong" || search.toString() === "Chittagong"){
        navigate("/chottogram")
      }

      else if(search.toString() ==="coxbazar" || search.toString() === "coxbazar" || search.toString() === "cox's bazar" || search.toString() === "Cox's bazar"){
        navigate("/coxbazar")
      }

      else if(search.toString() ==="rajshahi" || search.toString() === "Rajshahi"){
        navigate("/rajshahi")
      }


      else if(search.toString() ==="rangpur" || search.toString() === "Rangpur"){
        navigate("/rangpur")
      }

      else if(search.toString() ==="sylhet" || search.toString() === "Sylhet"){
        navigate("/sylhet")
      }

      
  }

  const handlekeydown = (e) =>{
      if (e.key === "Enter"){
        handlesearch();
      }
  }
  

  return (
    <div>
        <section className='section1'>
          <div className='forntscine'>
            <div className='maintext'>
              <h1>{language === 'bn' ? 'আপনার নিকটবর্তী সেরা রেস্টুরেন্ট থেকে ফুড ডেলিভারি এবং শপ থেকে গ্রোসারি অর্ডার করুন' : "It's the food and groceries you love, delivered"}</h1>
                <div className="maininput">
                  <input type="text" className='form-control' placeholder='Search your famous City ' value={search}  onChange={(e)=>setSearch(e.target.value) } onKeyDown={handlekeydown}/>
                 <button className='btn button01' onClick={handlesearch}>{language === 'bn' ? 'খাবার খুজুন' : 'Find food'}</button>
                 <NavLink to="/Place">
                 <button className='btn button02'>Find food</button>
                 </NavLink>
                 </div>
                
            </div>
            <div className='mainimg'>
               <img src="image/forntimage.webp" alt="" />
            </div>
            
          </div>

        </section>
    </div>
  )
}

export default Pandapage