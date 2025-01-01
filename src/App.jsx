import React from 'react'
import Navbar from './Navbar'
import Upperhero from './Upperhero'
import './App.css'
import Bottomhero from './Bottomhero'
import Card from './Card'
import Card2 from './Card2'
import Bander from "./Bander"
import Footertop from './Footertop'



function App() {
 

  return (
    <div className='bg-slate-200'>
    <Navbar/>
    <Upperhero/>
    <Bottomhero/>
    <Card/>
    <Card2/>
    <Bander/>
    <Footertop/>
    
    
    </div>
  )
}

export default App
