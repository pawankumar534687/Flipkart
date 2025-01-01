import React from 'react'
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

const Footertop = () => {
  return (
    <div className=' flex bg-black mt-8 p-16  justify-evenly'>
        <div className='text-sm gap-4 bg-black text-white  '>
            <h1 className='text-2xl text-slate-800'>About</h1>
            <p className='hover:underline text-xs '>Contect Us</p>
            <p className='hover:underline text-xs'>About Us</p>
            <p className='hover:underline text-xs'>Carriers</p>
            <p className='hover:underline text-xs'>Flipkart stories</p>
            <p className='hover:underline text-xs'>Press</p>
            <p className='hover:underline text-xs'>Corprate information </p>
        </div>
        <div className='text-sm gap-4 bg-black text-white  '>
            <h1 className='text-2xl text-slate-800'>GROUP COMPANIES</h1>
            <p className='hover:underline text-xs '>Myntra</p>
            <p className='hover:underline text-xs'>Cleartrip</p>
            <p className='hover:underline text-xs'>Shopsy</p>
        
        </div> <div className='text-sm gap-4 bg-black text-white '>
            <h1 className='text-2xl text-slate-800'>HELP</h1>
            <p className='hover:underline text-xs '>Payments</p>
            <p className='hover:underline text-xs'>Shipping</p>
            <p className='hover:underline text-xs'>Cancellation & Returns</p>
            <p className='hover:underline text-xs'>FAQ</p>
           
        </div> <div className='text-sm gap-4 bg-black text-white '>
            <h1 className='text-2xl text-slate-800'>CONSUMER POLICY</h1>
            <p className='hover:underline text-xs '>Cancellation & Returns</p>
            <p className='hover:underline text-xs'>Terms Of Use</p>
            <p className='hover:underline text-xs'>Security</p>
            <p className='hover:underline text-xs'>Privacy</p>
            <p className='hover:underline text-xs'>Sitemap</p>
            <p className='hover:underline text-xs'>Grievance Redressal  </p>
            <p className='hover:underline text-xs'>EPR Compliance </p>
            
           
        </div>
        <div className='border-l h-32  '></div>
        <div className='text-sm gap-4 bg-black text-white '>
            <h1 className='text-2xl text-slate-800'>Mail Us:</h1>
            <p className=' text-xs '>Flipkart internt Private Limited,</p>
            <p className=' text-xs'>Buildings Alyssa, Begonia &</p>
            <p className=' text-xs'>Clove Embassy Tech Village,</p>
            <p className=' text-xs'>Outer Ring Road, Devarabessanahalli Village,</p>
            <p className=' text-xs'>Bengaluru,560103,</p>
            <p className=' text-xs'>Karnatakem India  </p>
            <h1 className='text-2xl text-slate-800'>Social</h1>
            <div className='flex gap-2'>
            <TiSocialFacebookCircular />
            <FaXTwitter />
            <FiYoutube />
            </div>

            
           
        </div>
        
        <div className='text-sm gap-4 bg-black text-white '>
            <h1 className='text-2xl text-slate-800'>Registered Office Address:</h1>
            <p className=' text-xs '>Flipkart Internet Private Limited,</p>
            <p className=' text-xs'>Buildings Alyssa,Begonia &</p>
            <p className=' text-xs'>Clove Embassy Tech Village,</p>
            <p className=' text-xs'>Outer Ring Road, Devarabessanahalli Village,</p>
            <p className=' text-xs'>Bengaluru,560103,</p>
            <p className=' text-xs'>Karnatakem India </p>
            <p className=' text-xs'>CIN : U51109KA2012PTC066107 </p>
            <p className=' text-xs'>Telephone : 044-45614700 / 044-67415800 </p>
            
           
        </div>

        
        
      
    </div>
  )
}

export default Footertop
