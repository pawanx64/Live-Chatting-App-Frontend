import React from 'react'
import { Link,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 

export const Register = () => {
    const [Name,setName]=useState('');
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');

    const navigate=useNavigate();
    const navitoLogin=()=>{
        if(Name==='' || Email==='' || Password==='' || ConfirmPassword==='' || Password!==ConfirmPassword || !Email.includes('@'))
        {
            toast.error('Enter The Valid Details', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else{
            toast.success('Enter The Valid Details', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            navigate('/');
        }
    }
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
                    <input type='text' value={Name} onChange={(event)=>setName(event.target.value)} placeholder='Enter Your Name' className='w-56 p-2'/>
                </div>
                <div>
                   <input type='email' value={Email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter The Email' className='w-56 p-2'/>
                </div>
                <div>
                    <input type='password' value={Password} onChange={(event)=>setPassword(event.target.value)} placeholder='Enter The Password' className='w-56 p-2'/>
                </div>
                <div>
                    <input type='password' value={ConfirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)} placeholder='Enter The Confirm Password' className='w-56 p-2'/>
                </div>
                <button onClick={navitoLogin} className='bg-blue-800 p-3 w-56 rounded-xl hover:bg-fuchsia-950 text-white font-bold'>Sign Up</button>
                <ToastContainer
                    position="top-center"
                    autoClose={500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
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
