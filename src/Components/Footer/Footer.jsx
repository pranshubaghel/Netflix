
import React from 'react'

function Footer() {
  return (
    <>
    <div className='h-[400px] w-full  bg-black flex items-center justify-center  border-t-8 border-zinc-800'>
      <div className='h-[300px] w-[75%] '> 
      <p className='text-white px-5'>Questions? Call 000-800-919-1694</p>
      <div className='flex justify-between px-5 py-[30px] text-gray-300'>
      <ul>
        <li>FAQ</li>
        <li>Investor Relations</li>
        <li>Privacy</li>
        <li>Speed Test</li>
        <div className='flex gap-2 px-[50px] ' >
                <select className='border border-gray-600 bg-black px-3 '>
                    <option>English</option>
                    <option>Hindi</option>
                </select> </div>
        <li>Netflix India</li>
      </ul>

      <ul>
        <li>Help Centre</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
        <li>Legal Notices</li>

      </ul>
      <ul>
        <li>Account</li>
        <li>Ways to Watch</li>
        <li>Corporate Information</li>
        <li>Only on Netflix</li>

      </ul>
      <ul>
        <li>Media Centre</li>
        <li>Terms of Use</li>
        <li>Contact Us</li>
      </ul>
      </div>
      </div>
    </div>
    </>
  )
}

export default Footer;


