import React from 'react'
import phone1 from "./assets/phone1.webp"
import phone2 from "./assets/phone2.webp"
import phone3 from "./assets/phone3.webp"
import phone4 from "./assets/phone4.webp"
import phone5 from "./assets/phone5.webp"
import phone6 from "./assets/phone6.webp"

const Card2 = () => {
    return (
        <div>
            <div className="m-6">
                <p className="bg-white  text-2xl p-6">Best Deals on Smartphones</p>
                <div className='flex justify-evenly bg-white'>
                <div className="bg-white   justify-evenly">
                    <div className="border border-black-800 h-64 w-48  flex items-center justify-center  ">
                        <div className="border  h-44 w-36 mb-16">

                            <img className="h-full w-full  " src={phone1} alt="" />
                            <p className="overflow-hidden text-sm ">Redmi 12 5G</p>


                            <span>₹7999</span>
                        </div>

                    </div>
                </div>
                <div className="bg-white   justify-evenly">
                    <div className="border border-black-800 h-64 w-48  flex items-center justify-center  ">
                        <div className="border  h-44 w-36 mb-16">

                            <img className="h-full w-full  " src={phone2} alt="" />
                            <p className="overflow-hidden text-sm ">Vivo T2 5G</p>


                            <span>₹24999</span>
                        </div>

                    </div>
                </div> <div className="bg-white   justify-evenly">
                    <div className="border border-black-800 h-64 w-48  flex items-center justify-center  ">
                        <div className="border  h-44 w-36 mb-16">

                            <img className="h-full w-full  " src={phone3} alt="" />
                            <p className="overflow-hidden text-sm ">motorola</p>


                            <span>₹16999</span>
                        </div>

                    </div>
                </div> <div className="bg-white   justify-evenly">
                    <div className="border border-black-800 h-64 w-48  flex items-center justify-center  ">
                        <div className="border  h-44 w-36 mb-16">

                            <img className="h-full w-full  " src={phone4} alt="" />
                            <p className="overflow-hidden text-sm ">Nothing phone</p>


                            <span>₹23480</span>
                        </div>

                    </div>
                </div> <div className="bg-white   justify-evenly">
                    <div className="border border-black-800 h-64 w-48  flex items-center justify-center  ">
                        <div className="border  h-44 w-36 mb-16">

                            <img className="h-full w-full  " src={phone5} alt="" />
                            <p className="overflow-hidden text-sm ">Itel A70</p>


                            <span>₹7499</span>
                        </div>

                    </div>
                </div> <div className="bg-white   justify-evenly">
                    <div className="border border-black-800 h-64 w-48  flex items-center justify-center  ">
                        <div className="border  h-44 w-36 mb-16">

                            <img className="h-full w-full  " src={phone6} alt="" />
                            <p className="overflow-hidden text-sm ">Vivo Magneta</p>


                            <span>₹13490</span>
                        </div>

                    </div>
                </div>
                </div>
                
                
                
                
                


            </div>
        </div>
    )
}

export default Card2
