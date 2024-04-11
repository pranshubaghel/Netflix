
import React from 'react'

function ThirdBanner() {
  return (
    <div className='h-[500px] w-full bg-black flex items-center justify-between px-[95px] border-t-8 border-zinc-800'>

        <div className='h-[450px] w-[40%]  flex justify-center items-center  text-center '>
      <div>
      <h1 className='text-left text-5xl text-white py-4 font-extrabold  '>Watch everywhere</h1>
         <p className='text-left text-2xl text-white'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.

            .</p>
      </div>
      </div>
      <div className='h-[450px w-[50%]'>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
        </div>

    

</div>
  )
}

export default ThirdBanner;
