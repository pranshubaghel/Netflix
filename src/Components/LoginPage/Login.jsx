import React from 'react'
import { useState , useEffect } from 'react';
function Login() {
  const [accessToken, setAccessToken] = useState("")
  const handleLogin = () => {
      const CLIENT_ID = "162506691682-lem8ioa7vth71pen6h55i6921i59oiff.apps.googleusercontent.com"
      const REDIRECT_URI = "http://localhost:3000/inbox"
      const SCOPE = 'https://mail.google.com/'
      const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;
      window.location.href = AUTH_URL;
  };
  const getAccessToken = () => {
      const url = window.location.href
      const token = url.match(/access_token=([^&]+)/)
      localStorage.setItem("Token",token && token[1])
      console.log("Token is", localStorage.getItem("Token"))

  }
  useEffect(() => (
      getAccessToken()
  ), [])
  return (
    <div className=' h-[600px] bg-black'>
    <div className='h-[500px] w-[500px]  bg-gray-800 border-solid border-red-500px py-8 px-14 ml-80'>
       <h1 className='text-4xl text-white'>Sign In </h1>
       
       <div>
       <input className='border rounded-md border-black mt-9 h-[45px] w-[250px] bg-black text-white' placeholder='Enter your Email'></input>
       </div>

       <div>
       <input className = " border rounded-md border-black mt-4 bg-black h-[45px] w-[250px] text-white"placeholder='Password'></input>
       </div>
       <div>
       <button className='border rounded-md border-black h-[40px] w-[250px] bg-red-700 text-white mt-3' >Sign In</button>
        <h1 className='text-2xl text-white text-center'>OR</h1>
       <button onClick={handleLogin} className='border rounded-md border-black h-[40px] w-[250px] bg-gray-500 text-white'>Use a Sign-in</button>
       </div>
      
     
    

    </div>
</div>
  )
}

export default Login;