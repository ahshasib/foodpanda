import React,{useContext} from 'react'
import { LanguageContext } from './LanguageContext';
import "./Cssstyle/Download.css"

function Download() {

    const { language } = useContext(LanguageContext);

  return (
    <div>
        <div className="downloadapp">
        <h1>{language === 'bn' ? 'আমাদের অ্যাপকে পকেটে রাখুন' : 'Put us in your pocket'}</h1>
            <div className="container raw">
               
                <div className="download2">
                    <h4>{language === 'bn' ? 'পছন্দের খাবার এবং গ্রোসারি অর্ডার করতে, ডাউনলোড করুন এখনই' : 'Download the food and groceries you love'}</h4>
                    <div className="scanimg">
                        <img src="image/scan.png" alt="" />
                    
                    <p>{language === 'bn' ? 'আপনার পছন্দের রেস্টুরেন্ট এবং শপগুলিকে হাতের নাগালে রাখুন। আপনার মুডের সাথে মানানসই সঠিক খাবার খুঁজে পেতে বা সাপ্তাহিক বাজার থেকে নিজেকে বাঁচাতে ফুডপ্যান্ডা ব্যবহার করুন। ডাউনলোড করুন এখনই।' : "It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us."} </p>
                    </div>
                    <div className="buttond">
                    
                            <button className='btn'><img src="image/google-1632434_1280.png" alt="" /><span> <a href="https://play.google.com/store/apps/details?id=com.global.foodpanda.android&referrer=adjust_reftag%3Dculxe6SIUILcG%26utm_source%3DWebsite%26utm_campaign%3Dbd_homepage_android">GET IT ON <br /><p> Google Play</p> </a></span></button>
                    
                    </div>
                </div>
                <div className="phoneimage">
                    <img src="image/home-foodpanda-apps.webp" alt="" />
                </div>
            </div>

            
        </div>
        
        
      
    </div>
  )
}

export default Download