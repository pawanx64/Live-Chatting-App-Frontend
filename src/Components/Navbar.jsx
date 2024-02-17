import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

export const Navbar = () => {
  const navigate=useNavigate();
  const navigatehome=()=>{
    navigate('/');
  }
  return (
    <div>
          <div className='flex justify-around items-center pt-4 pb-4'>
            <div className='flex gap-1'>
              <img src="https://www.pexels.com/photo/orange-usb-charger-cable-on-black-surface-4219862/" className='h-[24px] w-[24px] bg-cover rounded-full bg-center'/>
              <span className='font-bold text-white text-lg'>Jhon</span>
            </div>
            <button onClick={navigatehome} className='bg-white p-2 rounded-lg font-semibold text-sm hover:bg-blue-400 hover:text-white'>Logout</button>
          </div>
          <div className='bg-yellow-300 ml-2 mr-2 rounded-lg h-1 '></div>
    </div>
    
  )
}
