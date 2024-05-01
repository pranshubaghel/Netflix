import React from 'react'

function NavInnerBanner() {
  return (
    <div className=' h-[70px] border w-full overflow-hidden'>
   <div className='flex items-center justify-between gap-2'>
  <div className='flex items-center gap-10'>
  <img className='h-[70px] w-[120px] ml-[50px]' src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" />
   <div className='cursor-pointer'>
    <ul className='flex gap-5 text-gray-600  px-2'>
      <li>Home</li>
      <li>TV Shows</li>
      <li>Movies</li>
      <li>News & Popular</li>
      <li>My List</li>
      <li>Browse by Languages</li>
    </ul>
    </div>
  </div>
    
    <div className='flex space-x-4 items-center justify-between text-gray-600 '>
       <i  class="fa-solid fa-magnifying-glass cursor-pointer text-2xl"></i>
       <p className='cursor-pointer'>Children</p>
       <i class="fa-solid fa-bell cursor-pointer"></i>
       <img className='h-10 w-10 rounded-md cursor-pointer' src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp" alt="" />
       </div>
   
   
   </div>
    </div>
  )
}

export default NavInnerBanner;