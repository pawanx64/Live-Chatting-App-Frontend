import React from 'react'
import { Chat } from '../Components/Chat'
import { Message } from '../Components/Message'

export const Home = () => {
  return (
    <div className='bg-slate-700 h-screen flex justify-center items-center '>
        <div className='w-4/5 flex border-2 h-4/5 rounded-xl '>
                <Chat />
                <Message/>
        </div>
    </div>
  )
}
