import React from 'react';


import "./Cssstyle/Fooditemcard.css";


function Fooditemcard(props) {
  return (
    <div>
    
          <div className="container">
            
            <div className="foodcard">
                <div className="row foodcardrow">

              
                <div className="col-md-3 card insidefoodcard">
                
                    <img src={props.img} className="card-img-top" alt="" />
                    <p className='foodcardspan1'><img src="image/percentage.jpg" alt="" />{props.toptitle}</p>
                    <p className='foodcardspan2'><img src="image/percentage.jpg" alt="" />{props.toptitle2}</p>
                    <div className="card-body carddiscription">
                        <h5>{props.titel}</h5>
                        <p>{props.p}</p>
                    </div>
               
                </div>
                

                
            </div>
                
            </div>
            </div>   
            
    </div>
    
  )
}

export default Fooditemcard