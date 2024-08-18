import React, { useState ,useEffect} from 'react'
import "./Cssstyle/Business.css";
import Footer from './Footer';


function Business() {
    const [formlist,formobj] = useState({
        fname:"",
        lname:"",
        email:"",
        btype:"",
        mob:""
       
      });

        useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
      
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

      


  return (
    <div>
         
        <div className='business'>
            <div className="container">
              <div className="businesstitel">
                <h2>Boost your revenue
                with <b>foodpanda!</b> </h2>
                <p>Sign up now and start earning more
                with the leading food delivery service foodpanda.</p>
              </div>
                
    <div className="businesslogin">
      <h2>Ready to grow your business?</h2>
      <form onSubmit={submit} className="row g-3"> 
       <div className="col-10 ">
         <input type="text" placeholder='Business Owner First Name' className='form-control' onChange={(e)=>
           change("fname",e.target.value)
         } value={formlist.fname}
         
          required/>
       </div>  


       <div className="col-10 ">
         <input type="text" placeholder='Business Owner Last Name' className='form-control' onChange={(e)=>
           change("lname",e.target.value)
         } value={formlist.lname}
         
          required/>
       </div>  

     
       <div className="col-10">
         <input type="email" placeholder='Business Owner Email'
         className='form-control' onChange={(e)=>
           change("email",e.target.value)
         } value={formlist.email} required/>
      </div>  
   
      <div className="col-10">   
         <input type="text" placeholder='Business Type' className='form-control' onChange={(e)=>
           change("btype",e.target.value)
         } value={formlist.btype} required/>
      </div> 

       <div className="col-10 flag"> 
       {/* <label htmlFor="formFile" className="form-label" > <img src="image/ban.jpg" alt="" />+880</label>   */}
         <input type="text" placeholder='+880 Mobile Number' className='form-control'  id="formFile" onChange={(e)=>
           change("mob",e.target.value)
         } value={formlist.mob} required/>
      </div>   

       <div className='col-10 getstartbutton'>
             <button type='submit' className="btn">Get Started</button>
       </div>
       </form>
      
                </div>

            </div>
        </div>


<div className="service">
<h1>We make it <span>simple and easy</span></h1>


  <div className="container servicelist">
    
    <div className="col-md-2 card ">
      <img src="image\process1x.avif" alt="" />
      <div className="card-body cardbody">
         <h5 className="card-title">The Customer Orders</h5>
         <p className="card-text">The customer places an order through the foodpanda app.</p>
      </div>
    </div>

    <div className="col-md-2 card ">
      <img src="image\process2x.webp" alt="" />
      <div className="card-body cardbody">
         <h5 className="card-title">You Prepare</h5>
         <p className="card-text">You will receive a notification to start preparing the order.</p>
      </div>
    </div>

    <div className="col-md-2 card">
      <img src="image\process3x.avif" alt="" />
      <div className="card-body cardbody">
         <h5 className="card-title">We Deliver</h5>
         <p className="card-text">A foodpanda rider will be along shortly to pick up the order .</p>
      </div>
    </div>

    <div className="col-md-2 card">
      <img src="image\process4x.avif" alt="" />
      <div className="card-body cardbody">
         <h5 className="card-title">Watch Your Business Grow</h5>
         <p className="card-text">The customer places an order through the foodpanda app.</p>
      </div>
    </div>
  </div>
</div>




  <div className="rider">
    <div className="bysicle">
      <div className="riderimage">
        <img src="image/story_1.jpg" alt="" />
      </div>
      <div className="ridertext">
        <p>Undoubtedly, you can choose Foodpanda as your delivery partner. I am personally satisfied with foodpanda service.</p>

          <span> Kini Ar Khai, Dhaka</span>
      </div>
    </div>

    <div className="bysicle">
      <div className="ridertext">
        <p>My goods have been sold a lot from Foodpanda and I have made a lot of profit during Covid-19 Pandemic. Thanks to their relentless effort.</p>
        <span>Abdullah Al-Mamun Bhuiyan </span><br />
        <span>Abdullah Vegetable Store, Dhaka</span>
      </div>
      <div className="riderimage">
        <img src="image/story_2.webp" alt="" />
      </div>
    </div>
  </div>


  <Footer />
</div>

    
  )
}

export default Business