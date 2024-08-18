import React from 'react';
import "./Cssstyle/Selectfoodcart.css";
import {useCart} from "react-use-cart";


function Selectfoodcart(props) {
const {addItem} = useCart()

  return (
    <div className='selectfoodcart'>
        <div className="foodcard1" onClick={() => addItem(props.item)}>
                    <div className="foodcard1text">
                      <h6>{props.name}</h6>
                      <p className='pricemany'>from TK {props.price}</p>
                      <p>{props.ingredent}</p>
                     
                     
                    
                    </div>
                    <div className="foodcard1image">
                      <img src={props.img} alt="" />
                    </div>
                  </div>
    </div>
  )
}

export default Selectfoodcart