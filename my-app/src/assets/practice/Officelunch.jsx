import React,{useContext} from 'react'
import "./Cssstyle/Officelunch.css"
import {NavLink,Link} from "react-router-dom"
import { LanguageContext } from './LanguageContext';
function Officelunch() {
    const { language } = useContext(LanguageContext);

  return (
    <div>

<div className='officialcontent'>
            <h1>{language === 'bn' ? 'আপনার অফিসের সবার সাথে লাঞ্চ করুন' : 'Take your office out to lunch'}</h1>
            <div className='officialpic'>
                <img src="image/office1.jpg" alt="" />

                <div className="officialshortdiv">
                    <h4>{language === 'bn' ? ' ফুডপ্যান্ডা ফর বিজনেস' : 'foodpanda for business'}</h4>
                    <p>{language === 'bn' ? ' ঘরে বসে অফিস - মাঝে লাঞ্চের বিরতি, অফিসে লেট নাইট, কর্পোরেট ইভেন্টস, ক্লায়েন্ট মিটিং এবং এমন আরও অনেক কিছুর জন্য অর্ডার করুন।' : 'Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.'}</p>
                    <NavLink to="/business">
                        <button className='btn'>Get started</button>
                    </NavLink>
                    
                </div>
            </div>

            
        </div>
           <div className="officeparagraph">
        <div className="paragraph">
                <h4>{language === 'bn' ? 'ফুডপ্যান্ডা বাংলাদেশ দিয়ে সেরা সব রেস্টুরেন্ট থেকে খাবার অর্ডার করুন এবং কেনাকাটা করুন' : 'Order food from the best restaurants and shops with foodpanda Bangladesh'}</h4>
                <p>{language === 'bn' ? 'আপনি কি ক্ষুধার্ত? সারা দিন শেষে ক্লান্ত? আপনি কি অফিসেই একটি চিজি পিজ্জা অর্ডার করতে আগ্রহী বা সাপ্তাহিক বাজার এড়াতে চান? তাহলে ফুডপ্যান্ডা বাংলাদেশ আপনার জন্য সেরা সমাধান! আপনার প্রতিদিনের কাজ সহজ করার জন্য আপনার কাছাকাছি সেরা সব রেস্টুরেন্ট এবং শপগুলো রয়েছে ফুডপ্যান্ডাতে। টেকআউট থেকে একটি জুসি বার্গার, সামদাদো থেকে ফ্রেশ সুশি বা নান্দোস থেকে পেরি পেরি চিকেন - আমাদের অনলাইন ফুড ডেলিভারি সার্ভিসে রয়েছে সব। ফুডপ্যান্ডা বাংলাদেশে ঢাকা থেকে চট্টগ্রাম হয়ে সিলেট পর্যন্ত ২০০০ টিরও বেশি রেস্টুরেন্ট রয়েছে। আপনি জানেন কি এখন ফুডপ্যান্ডা থেকে গ্রোসারি সহ আরও অনেক কিছু অর্ডার করা যায়? Unimart, Suborno, Shwapno, Bengal Meat এর মত আরও প্রিয় সব পার্টনার খুঁজে পেতে ফুডপ্যান্ডা শপে ভিজিট করুন। নিশ্চিন্তে থাকুন, আর আপনার সব দৈনন্দিন দায়িত্ব বুঝিয়ে দিন ফুডপ্যান্ডা বাংলাদেশ-কে।' : "Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Bangladesh is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your everyday easier. Our online food delivery service has it all, whether you fancy a juicy burger from Takeout, fresh sushi from Samdado or peri peri chicken from Nando's, foodpanda Bangladesh has over 2000 restaurants available from Dhaka to Chittagong through to Sylhet. Did you know you can order your groceries and more from foodpanda, too? Check out foodpanda shops for favourite partners like Unimart, Suborno, Shwapno, Bengal Meat, and much more. Sit back and relax – let foodpanda Bangladesh take the pressure off your shoulders."}
                </p>
                {language !== 'bn' && (
                        <button className="btn" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#collapsdiv">
                            Click Here to Read More...
                        </button>
                    )}


                <div className="col">
                <div className="collapse multi-collapse" id="collapsdiv">
                <div className="card card-body officelunchparagraph">
                <h4>Why choose foodpanda?</h4>
                <ul>
                    <li> <span>✓ </span> More options: food delivery from 2000+ restaurants in Dhaka, Chittagong and Sylhet in Bangladesh, as well as Bangladesh grocery delivery and more from shop partners. Order from cuisines ranging from fast food, to sushi, to cakes. Shop online for everything from fresh produce to electronics.</li>
                    <li> <span>✓ </span> Easy search: filter by cuisine or location, or simply type in the name of the bsiness you want.</li>
                    <li> <span>✓ </span> Various offers: indulge in the endless discounts and offers available from top restaurants and shops.</li>
                    <li> <span>✓ </span> Payment options: Payment made easier with cash on delivery and online payment options</li>
                    <li> <span>✓ </span> A simple 4-step food ordering process: Search → Choose → Pay → Enjoy
                    </li>
                    </ul>
                    <div>
                        <h4>Choose from over 25 cuisines and order online now!</h4>
                        <p>From the first step of choosing your location to receiving the food, foodpanda makes ordering the food you love easy. Want some Indian, Mexican or Middle Eastern food? Take your tastebuds on a journey around the world with the vast range of cuisines available at your fingertips. Order your favourite soup, salad, sandwich or dessert from the finest restaurants in your area or affordable local favourites. Choose home delivery to sit back and relax, or select Pick-Up to self-collect when you're on the go. Let foodpanda take care of it.</p>
                        <h4>Get grocery delivery in Bangladesh with foodpanda shops</h4>
                        <p>Missing milk? Batteries? Detergent? foodpanda shops delivers all your essential grocery items through the foodpanda app. It's everyday online shopping made easy. Choose anything from daily essentials to grocery to health to pharmaceuticals and even electronics. Head to checkout and our pandamart rider will be at your door in a flash</p>
                        <ul>
                            <li> <span>✓ </span>over 20,000 items</li>
                            <li> <span>✓ </span>select your grocery store</li>
                            <li> <span>✓ </span>everyday affordable items delivered</li>
                            <li> <span>✓ </span>25 minute average delivery time</li>
                        </ul>

                    </div>
                    <div>
                        <h4>Home delivery via foodpanda's mobile app</h4>
                        <p>Even while on the move, you can order food online anytime and anywhere, thanks to the foodpanda mobile app for iOS, Android and Windows Phone devices. Simple, fast and convenient - it's the simplest online food ordering process in Bangladesh. With an impressive choice of restaurants and shops , foodpanda Bangladesh is confident you'll find just what you're looking for. Browse through the menus, make your choices, go to checkout and then sit back and wait for your order to arrive.</p>
                    </div>


                
                </div>
                </div>
                </div>
            </div>
            </div>   
    </div>
  )
}

export default Officelunch