import React from 'react'
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className='bg-slate-700 h-screen'>
        <div className='flex justify-center items-center pt-28'>
            <section className='bg-white  w-fit h-fit p-10 flex flex-col justify-center items-center text-center gap-4 rounded-3xl '>
                <div>
                    <h1 className='font-serif font-bold text-3xl text-purple-800'>Let's Chat</h1>
                </div>
                <div>
                    <h3 className='font-serif text-xl font-bold'>Register</h3>
                </div>
                <div>
                    <input type='text' placeholder='Enter Your Name' className='w-56 p-2'/>
                </div>
                <div>
                   <input type='email' placeholder='Enter The Email' className='w-56 p-2'/>
                </div>
                <div>
                    <input type='password' placeholder='Enter The Password' className='w-56 p-2'/>
                </div>
                <div>
                    <input type='password' placeholder='Enter The Confirm Password' className='w-56 p-2'/>
                </div>
                <button className='bg-blue-800 p-3 w-56 rounded-xl hover:bg-fuchsia-950 text-white font-bold'>Sign Up</button>
                <div>
                    <span className='text-base font-semibold'>You Have An Account? </span>
                    <Link className='text-base font-semibold text-blue-700 hover:text-blue-950 hover:underline' to="/">
                        Login
                    </Link>
                </div>
            </section>
        </div>
    </div>
  )
}
