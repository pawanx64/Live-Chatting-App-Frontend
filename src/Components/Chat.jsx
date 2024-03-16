import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { Welcome } from './Welcome';

export const Chat = () => {
  const [Selected,setSelected]=useState('');
  
  return (
    <div className='border-r-2 rounded-sm w-1/4'>
        <Navbar/>
        <div className='ml-2 mr-2 '>
            <div className='flex flex-wrap p-4 gap-6 border-2 mt-5 rounded-xl'>
              <img src="https://www.pexels.com/photo/orange-usb-charger-cable-on-black-surface-4219862/" className='h-[24px] w-[24px] bg-cover rounded-full bg-center'/>
              <span >Rachit</span>
            </div>
            <div className='flex flex-wrap p-4 gap-6 border-2 mt-5 rounded-xl'>
              <img src="https://www.pexels.com/photo/orange-usb-charger-cable-on-black-surface-4219862/" className='h-[24px] w-[24px] bg-cover rounded-full bg-center'/>
              <span >Pranav</span>
            </div>
            <div className='flex flex-wrap p-4 gap-6 border-2 mt-5 rounded-xl'>
              <img src="https://www.pexels.com/photo/orange-usb-charger-cable-on-black-surface-4219862/" className='h-[24px] w-[24px] bg-cover rounded-full bg-center'/>
              <span >Pratham</span>
            </div>
            <div className='flex flex-wrap p-4 gap-6 border-2 mt-5 rounded-xl'>
              <img src="https://www.pexels.com/photo/orange-usb-charger-cable-on-black-surface-4219862/" className='h-[24px] w-[24px] bg-cover rounded-full bg-center'/>
              <span >Mayank</span>
            </div>
        </div>
    </div>
      
  )
}
