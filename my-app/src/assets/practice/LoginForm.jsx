import React,{ useState,useContext } from 'react'
import  "./Cssstyle/Login.css"
import { LanguageContext } from './LanguageContext';



function LoginForm() {
  const { language } = useContext(LanguageContext);

  const [formlist,formobj] = useState({
    name:"",
    email:"",
    password:""
   
  });
  
  const change = (property, value) => {
    formobj(prev => ({
      ...prev,
  
      [property]: value
    }));
  };
  
  const submit = (e) =>{
    e.preventDefault();
    alert(JSON.stringify(formlist));
  };

  const [status,setstatus] = useState(true);




  
  
      

     
      
  return (
    <div>
     {
     status && (
     <div className="backdrop"> 
     <div className="  main">
     <h1 className='mt-5 ms-3'>{language === 'bn' ? 'স্বাগতম' : 'Welcome'}</h1>
     <p className='ms-3'>{language === 'bn' ? 'চালিয়ে যেতে সাইন আপ বা লগইন করুন' : 'Sign up or log in to continue'}</p> 
 
     <div className="container containerlogin">   
          
 
       <form onSubmit={submit} className="row g-3"> 
       <div className="col-10 ">
         <input type="text" placeholder='Name' className='form-control' onChange={(e)=>

           change("name",e.target.value)
         } value={formlist.name}
         
          required/>
       </div>  
     
       <div className="col-10">
         <input type="email" placeholder='Email'
         className='form-control' onChange={(e)=>
           change("email",e.target.value)
         } value={formlist.email} required/>
      </div>  
   
      <div className="col-10">   
         <input type="password" placeholder='Password' className='form-control' onChange={(e)=>
           change("password",e.target.value)
         } value={formlist.password} required/>
      </div>     
       <div className='col-10 button'>
             <button type='submit' className="btn">Log in</button>
       </div>
       </form>
      
       <div className="extrabutton">
         <img src="image/google.png" alt="" />
         <button className='btn'  onClick={()=>{
           alert("This property are not useable.Please give your Name , Email, Password and try to log in")
         }}>Continue with Google</button>
     </div>
     
     <div className="extrabutton2 ">
         <img src="image/fb.png" alt="" />
         <button className='btn' onClick={(e)=>{
           alert("This property are not useable.Please give your Name , Email, Password and try to log in")
         }}>Continue with Facebook</button>
     </div>
     </div>
    
     <button type="button" className="btn-close clb" aria-label="Close" onClick={()=>setstatus(false)}></button>
     </div> 
     </div>
     )}
   
         
    
</div>  
    
  )
}

export default LoginForm