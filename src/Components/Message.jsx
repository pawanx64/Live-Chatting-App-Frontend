import React from 'react'
import { useNavigate } from 'react-router';
import { FaPowerOff } from "react-icons/fa";

export const Message = () => {
  const navigate=useNavigate();
  const navigatehome=()=>{
    navigate('/');
  }
  return (
    <div>
        <div >
          <div className='flex w-[60vw] h-fit  pt-5 pb-5'>
              <div className='flex w-[60vw] justify-around item-center gap-1 items-center'>
                <div className='flex gap-5'>
                  <img src="https://www.pexels.com/photo/orange-usb-charger-cable-on-black-surface-4219862/" className='h-[24px] w-[24px] bg-cover rounded-lg bg-center'/>
                  <span className='font-bold text-white text-lg flex justify-center items-center'>Jhon</span>
                </div>
                <FaPowerOff size={30} onClick={navigatehome} className='bg-white p-2 rounded-md  hover:bg-blue-400 hover:text-white'/>
              </div>
            </div>
          <div className='bg-yellow-300 ml-2 mr-2 rounded-lg h-1 '></div>
          </div>
        <div className=''>
            Message
        </div>
    </div>
   
  )
}
