import React from 'react'
import Navbar from '../compnents/Navbar'
import Sidebar from '../compnents/Sidebar'

export default function Home() {
  return (
    <div className='max-h-screen overflow-hidden'>
        <div style={{height: "7.5vh"}}>
            <Navbar/>
        </div>
        <div className='flex' style={{height: "92.5vh"}}>
            <Sidebar />
        </div>
    </div>
  )
}
