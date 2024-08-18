import React, { useState,useContext} from 'react'
import  "./Cssstyle/Nav.css"
import LoginForm from './LoginForm'; 
import Signup from './Signup'; 
import { NavLink } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import { AuthProvider } from './AuthContext';

  
    
  


 
  function Navbar() {

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showsignupForm, setShowsignupForm] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  // const [selectedLanguage, setSelectedLanguage] = useState('en');


  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handelsignup = ()=>{
    setShowsignupForm(!showsignupForm);
  } 


  const handleLanguageChange = (e) => {
    const selectedValue = e.target.value;
    setLanguage(selectedValue);
  };

  return (
    
    <div>


        <nav className='navbar navbar-expand-lg'>
            <div className="container  navcontainer">
                <NavLink to ="/"  className="navbar-brand">
                  <div className="forimagediv">
                 
                    <img src="image/panda.png" alt="" />
                    </div>
                    
                    <div className='name'>foodpanda</div>
                    
                </NavLink>
                <div className="navbutton">
                  <button className="btn btn-white button1" onClick={handleLoginClick}>
                  Log in
                  </button>
                  
                  <button className="btn button2" onClick={handelsignup}>
                  Sign up
                  </button>

                  <div className='glob'><img src="image/glob.png" alt="" /></div>
                  
                  <select 
                 className='selection' 
                 value={language} 
                 onChange={handleLanguageChange}
>
                    
                    <option  value="en" className='item'>English</option>
                    <option  value="bn" className='item'>বাংলা</option>
                  </select>
                </div>
            </div>
        </nav>
        <AuthProvider>
        {showLoginForm && <LoginForm />}
        {showsignupForm && <Signup />}
        </AuthProvider>
        

    </div>
  )
}



export default Navbar