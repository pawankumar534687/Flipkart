import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineStorefront } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";


const Navbar = () => {
    return (
        <div className='bg-white flex h-16 pl-8 justify-evenly  mb-2'>
            <img className=' ' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" title="Flipkart" />
            <div className='flex items-center '>
                <button className='bg-white h-10 rounded-l-lg w-10 flex justify-center items-center '><CiSearch className=' ' /></button>

                <input className='bg-white outline-none rounded-r-lg w-[30rem] h-10 ' type="search" placeholder='Search for Brands, Products and More' />
            </div>

            <div className='flex items-center justify-center gap-1 group  '>
                
                <VscAccount className='text-2xl' />
                Login
              
                <FaAngleDown className='transform transition-transform duration-300 group-hover:rotate-180'/>
               
               



               



            </div>
            <div className='flex items-center justify-center '>
            <AiOutlineShoppingCart  className='text-2xl'/>
            Cart

            </div>
            <div className='flex items-center justify-center'>
            <MdOutlineStorefront className='text-2xl ' />

                Become a Seller
                
            </div>
            <div className=' flex items-center justify-center'>
            <BsThreeDotsVertical  className='text-2xl'/>
            </div>

        </div>
    )
}

export default Navbar
