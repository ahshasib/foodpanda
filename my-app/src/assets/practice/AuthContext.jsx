
import React, { createContext, useState } from 'react';
import Cart from './Cart';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
  const [formlist,formobj] = useState({
    name:"",
    email:"",
    password:""
   
  });

  const [newData, setNewData] = useState();

  const updateFormlist = (newData) => {
    console.log('Updating formlist with newdate:', newData);
    
    formobj(prev => ({ ...prev, ...newData }));
    
    setNewData(newData);


    
 
    
};
  return(
    
    <AuthContext.Provider value={{formlist,updateFormlist,newData}}>
      {children}
      {
      newData && <Cart newData={newData} />
      }

      
      
    </AuthContext.Provider>
   
  );
};