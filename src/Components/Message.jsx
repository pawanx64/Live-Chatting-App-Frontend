import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { FaPowerOff } from "react-icons/fa";
import EmojiPicker from 'emoji-picker-react';
import { IoSend } from "react-icons/io5";
import { FaRegSmileWink } from "react-icons/fa";

export const Message = () => {
  
  const navigate=useNavigate();
  const navigatehome=()=>{
    navigate('/');
  }

  const[EmojiSelect,setEmojiSelect]=useState(false);
  const[Msg,setMsg]=useState("");
  const handleEmojiShow=()=>{
    setEmojiSelect(!EmojiSelect);
  };
  return (
    <div className='grid grid-rows-3'>
        <div className=''>
          <div className='flex w-[60vw]  pt-5 pb-5'>
              <div className='flex w-[60vw] justify-between item-center gap-1 ml-10 mr-10 items-center'>
                <div className='flex gap-5'>
                  <img src="https://www.pexels.com/photo/orange-usb-charger-cable-on-black-surface-4219862/" className='h-[24px] w-[24px] bg-cover rounded-lg bg-center'/>
                  <span className='font-bold text-white text-lg flex justify-center items-center'>Pawan </span>
                </div>
                <FaPowerOff size={28} onClick={navigatehome} className='bg-white p-2 rounded-md  hover:bg-blue-400 hover:text-white'/>
              </div>
            </div>
            <div className='bg-yellow-300 ml-2 mr-2 rounded-lg h-1 '></div>
          </div>
        <div className=''>
            
        </div>
        <div className=''>
            <div className='flex'>
                <div className='emoji'>
                      <div className=''>
                          <FaRegSmileWink onClick={handleEmojiShow}/>
                      </div>
                </div>
                <form className=''>
                      <input type="text" placeholder='Type Your Message Here'/>
                      <button type="submit"><IoSend /></button>
                </form>
            </div>
        </div>
    </div>
   
  )
}
