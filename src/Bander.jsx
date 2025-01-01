import React from 'react'
import bander from "./assets/bander.webp"
import bander1 from "./assets/bander1.webp"
import bander2 from "./assets/bander2.webp"
import bander3 from "./assets/bander3.webp"
import bander4 from "./assets/bander4.webp"
import bander5 from "./assets/bander5.webp"
import bander6 from "./assets/bander6.webp"
import bander7 from "./assets/bander7.webp"
import bander8 from "./assets/bander8.webp"
import bander9 from "./assets/bander9.webp"


const Bander = () => {
  return (
    <div className='bg-white'>
      <div className=''>
        <img src={bander} alt="" />
      </div>
      <div className='flex p-2 gap-2 justify-center items-center   '>
        <img className=' w-[440px]' src={bander1} alt="" />
        <img className='w-[440px]' src={bander2} alt="" />
        <img className='w-[440px]' src={bander3} alt="" />
      </div>
      <div className='flex   p-2 gap-2 justify-center items-center'>
        <img className=' w-[440px]' src={bander4} alt="" />
        <img className=' w-[440px]' src={bander5} alt="" />
        <img className=' w-[440px]' src={bander6} alt="" />
      </div>
      <div className='flex    p-2 gap-2 justify-center items-center'>
        <img className='w-[440px]' src={bander7} alt="" />
        <img className='w-[440px] ' src={bander8} alt="" />
        <img className='w-[440px] ' src={bander9} alt="" />
      </div>
    </div>
  )
}

export default Bander
