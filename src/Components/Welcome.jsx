import React, { useState } from 'react'

export const Welcome = () => {
    const[userName,setUserName]=useState("");
  return (
    <div>
        <h1>
            Welcome ,<span>{userName}</span>
        </h1>
        <h3>
            Please Select A Chat To Start Messaging..
        </h3>
    </div>
  )
}
