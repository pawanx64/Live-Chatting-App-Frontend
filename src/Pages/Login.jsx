import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const navigate=useNavigate();
    const navitoHome=async(event)=>{
        
        if(Email==='' || !Email.includes('@') || Password==='')
        {
            toast('🦄 Wow so easy!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                
            });
        }
        else{
            navigate('/Home');
        }
    }

  return (
    <div className='bg-slate-700 h-screen'>
        <div className='flex justify-center items-center pt-48'>
            <section className='bg-white w-fit h-fit p-10 flex flex-col justify-center items-center text-center gap-4 rounded-3xl '>
                <div>
                    <h1 className='font-serif font-bold text-3xl text-purple-800'>Let's Chat</h1>
                </div>
                <div>
                    <h3 className='font-serif text-xl font-bold'>Login</h3>
                </div>
                <div>
                    <input type='email' value={Email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter The Email' className='w-56 p-2'/>
                </div>
                <div>
                    <input type='password' value={Password} onChange={(event)=>setPassword(event.target.value)} placeholder='Enter The Password' className='w-56 p-2 '/>
                </div>
                <button onClick={navitoHome} className='bg-blue-800 p-3 w-56 rounded-xl hover:bg-fuchsia-950 text-white font-bold'>Sign In</button>
                <div>
                    <span className='text-base font-semibold'>You Don't Have An Account? </span>
                    <Link className='text-base font-semibold text-blue-700 hover:text-blue-950 hover:underline' to="/Register">
                        Register
                    </Link>
                </div>
            </section>
        </div>
    </div>
  )
}
