import React from 'react';
import Nav from '../NavBar/Nav';


function Home() {
  return (
    <div className="h-[650px] w-full bg-[url('https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg')] bg-cover bg-no-repeat">
      <Nav />
      <div className='flex items-center justify-center pt-[120px] '>
        <div className=' text-white'>
          <h1 className='text-5xl font-extrabold'>
            Unlimited movies, TV shows and more</h1>
          <h1 className='text-2xl text-center py-4 font-bold'>Watch anywhere. Cancel anytime.</h1>

          <p className='text-center'> Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
      </div>
      <div className='flex  items-center justify-center gap-2 pt-2 '>
        <input className='h-[50px] w-[400px] bg-transparent border border-gray-600 rounded ' placeholder='Email address' />
         <button className='border border-gray-600 rounded bg-red-600 text-white h-[55px] w-[150px] text-[20px] font-bold'>Get Started  </button> 
      </div>


    </div>
  )
}

export default Home;