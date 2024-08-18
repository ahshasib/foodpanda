import React ,{useContext}from 'react';
import "./Cssstyle/Chef.css"
import {NavLink,Link} from "react-router-dom"
import { LanguageContext } from './LanguageContext';

function Chef() {

  const { language } = useContext(LanguageContext);

  return (
    <div>
        <section className='sec1'>
        
        <h1>{language === 'bn' ? 'আপনি খাবার তৈরি করবেন, বাকি দায়িত্ব আমাদের' : 'You prepare the food, we handle the rest'}</h1>
        <div className="mainpic2">
           <div className="mainimage2fit">
              <img src="image/mainimage2.png" alt="" />
           </div>
           <div className="shortdiv">
            <h3>
            {language === 'bn' ? 'ফুডপ্যান্ডাতে আপনার ব্যবসা তালিকাভুক্ত করুন' : 'List your restaurant or shop on foodpanda'}
            </h3>
            <p>
            {language === 'bn' ? 'আপনি কি চান হাজারো নতুন কাস্টমার আপনার দারুণ সব আইটেমগুলি অর্ডার করুক? আমরাও তাই চাই!' : 'Would you like millions of new customers to enjoy your amazing food and groceries? So would we!'}
                
                <br />
                <br />
                {language === 'bn' ? 'এটি সহজ: আপনি অনলাইনে যা বিক্রি করেন আমরা তা লিস্ট করে, অর্ডার প্রসেস করে, সেগুলো পিক করে আগ্রহী প্যান্ডাদের কাছে ডেলিভার করতে সহায়তা করি - হার্টবিটে!' : " It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas  in a heartbeat!"}
               
                <br />
               <br />
               {language === 'bn' ? 'আগ্রহী? আসুন আজই আমাদের পার্টনারশিপ শুরু করি!' : " Interested? Let's start our partnership today!"}
                
            </p>
            <NavLink to="/business">
            <button className='btn '>
                Get started
            </button>
            </NavLink>
           </div>
        </div>
        
       </section>
    </div>
  )
}

export default Chef