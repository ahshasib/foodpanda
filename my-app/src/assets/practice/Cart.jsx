
import React, { useContext,useState} from 'react';

import "./Cssstyle/Cart.css";
import { useCart } from 'react-use-cart';
import { NavLink } from 'react-router-dom';
import Home from './Home';



function Cart() {

const [orderPlaced,setorderplaced] = useState(false);
const [name,setName] = useState('');
const [house,setHouse] = useState('');
const [city,setCity]= useState('');
const [mobile,setMobile]=useState('');
const [email,setEmail]=useState(''); 
const [check,setCheck]=useState(false)


const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    } = useCart();

  

    
   const handleplaceorder = (e) =>{
    e.preventDefault();
   


    if(!isEmpty){
        setorderplaced(true);
        // emptyCart();
    }
   
   
   
   } 

    
  return (


   
<div>
     <div className={`finalorderpage ${orderPlaced ? "finalorderpage-active" : "finalorderpage "}`}>
        <div className='container mainpoint'>
            <div className="haderandclosebut">
                <h2>Thanks for your order</h2>
                <button type="button" className="btn-close" aria-label="Close" onClick={()=>setorderplaced(false)}></button>
            </div>

            <div className="finalordermainimg">
            <img src="image/rider.png" alt="" />
            
            </div>
           
            <div className="identity">
                <div className='identityform'>
                <h4>Confirm your identity</h4>
                <form className="row g-3">
                <div className="col-md-10">
                    <input type="text" placeholder='Name' value={name} className='form-control' onChange={(e)=>setName(e.target.value)} required/>
                </div>  

                <div className="col-md-7">
                    <input type="text" className="form-control" id="validationDefault03" value={house} placeholder='House no / state' onChange={(e)=>setHouse(e.target.value)} required />
                </div>

                <div className="col-md-3">
                     <select className="form-select" id="validationDefault04" value={city} onChange={(e)=>setCity(e.target.value)} required>
                        <option disabled value="">City</option>
                        
                        <option  >Dhaka</option>
                        <option>Khulna</option>
                        <option>Chittagong</option>
                        <option>Bagerhat</option>
                        <option>Barisal</option>
                        <option>Cox's Bazar</option>
                        <option>Pabna</option>
                        <option>Rajshahi</option>
                     </select>
                </div>

                <div className="col-md-10 "> 
                     
                     <input type="text" placeholder='Mobile Number' className='form-control' value={mobile} id="formFile"  onChange={(e)=>setMobile(e.target.value)} required/>
                </div> 

                <div className="col-md-10">
                    <input type="email" placeholder=' Email'
                    className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>

                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input cashondelivery" type="checkbox" checked={check} id="invalidCheck2" onChange={(e)=>setCheck(e.target.value)} required />
                    <label className="form-check-label" htmlFor="invalidCheck2">
                    Cash on delivery
                    </label>
                </div>

                <div className="col-12 ordrnow" >
                    <button className="btn " type="submit" onClick={(e)=>{
                         e.preventDefault();
                         if (name && house && city && mobile && email && check) {
                           setorderplaced(false)
                           emptyCart();
                           
                            console.log(name)
                            console.log(house)
                            console.log(city)
                            console.log(mobile)
                            console.log(email)
                            console.log(check)

                         } else {
                           alert('Please Confirm your identity properly');
                         }
                            
                    }}
                          
                    >Order now</button>
                </div>


                
                </div>
                </form>

                </div>

                <div className="identityproductsum">
                    {
                         items.map((item,index) => (
                            < div className='itemproductinnerdiv' key={index}>
                            <div className='identityproductimage'>
                                <h6>{item.quantity}</h6>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='identitydetail'>
                            <h6>{item.name} </h6>
                            <p>TK {item.price}</p> 
                           
                            
                            
                            </div>
                            </div>
                         )
                    )}
                    <p className='totalda'>Total {cartTotal}</p>
                </div>


            </div>
        </div>
     </div>


    
    <div className="rightordercard">         
    <div className="ordercardimageandtext">
        <img src="image/buscatepanda.png" alt="" />
        <h5>Hungry?</h5>
        <p>Do you want to add something in your cart!</p>
    </div>
       
    
    
    
    {
       
     items.map((item,index) => 
        
    (

        <div className="ordercardseleactitem" key={index}>
        <div className="ordercardseleactitemimg">  
            <img src={item.img} alt="" />
        </div>
        <div className="ordercardseleactitemtext">
            <div className="nameandremovbut">
            <h6>{item.name}</h6>
            <button className='btn removebutton' onClick={()=> removeItem(item.id)}><i className="bi bi-trash3-fill"></i></button>
            </div>
            
            <div className='orderbuttonandtk'>
                
                <p>TK {item.price}</p>
                
                
                <div className="input-wrapper orderdegetindic">
                <button className="btn btn-decrement" type="button" id="button-addon1" 
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                <div className="degetinput">{item.quantity}</div>
                <button className="btn btn-increment" type="button" id="button-addon1" 
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                
            </div>
        </div>
    </div>

    
    
    )

   
    


        )
        

        
    }
    {
       
        <div className="totalamaount">
        <div className="totalamounttext">
            <p>Total <span>(Incl. VAT)</span></p>
            <p>TK {cartTotal}</p>
        </div>
        <button className="btn" onClick={handleplaceorder}>Review payment and address</button>
    </div>
    }
    
    </div>
    </div>
   
  )
}

export default Cart