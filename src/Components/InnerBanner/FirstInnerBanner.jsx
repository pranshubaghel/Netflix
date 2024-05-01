import React from 'react'
import NavInnerBanner from './NavInnerBanner';
import NewMovies from '../Movies/NewMovies';
import ActionMovies from '../Movies/ActionMovies';
import TrendingMovies from '../Movies/TrendingMovies';
import HindiMovies from '../Movies/HindiMovies';
import InnerFooter from '../NavBar/InnerFooter/InnerFooter';

function FirstInnerBanner() {
  return (
    <>
    <div className="h-[700px] object-cover  w-full bg-cover bg-[url('https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXICTK-t0hOnnTM3qS-MjALqY00A55zpfpFAITjXabOKNjyQUN_WHs_5Ef8uu-BQsGiU6PfrrgVybR6x43p2gNRqlgGudR6FRsIw.webp?r=a86')]">
      <NavInnerBanner />

      <div className='h-[400px] w-[30rem] px-12 mt-20 '>
        <img src='https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRP0qVvk0eOlrejKsX2N38Ck4Fly_NIoCnn0rrVetBpPksJFkVc2jhRvvbkyPZeEDoAc7T7ZwEaSTCdwq88bBJ_QoUrKyRaeQT-RWHuJhIkZhW9ElzkPDvw5iVSaRfj_h6iQ7nxOfhDy0unpJ3WoiYV8SO7mF3ee-VlDji7QK-eh34OyLpfHsA.webp?r=c6a' />
        <p className='font-serif text-2xl text-white'>two hometown sweethearts reunite after a scandal forces one of them
          home in this "intimate, beautiful" drama hailed as a "comfort watch" by NME</p>
        <div className='w-[25rem]   gap-3 flex '>
          <button className='h-[7vh] w-[8rem] border-3 gap-3 flex justify-center text-center  rounded  font-extrabold bg-white text-black'> <i class="fa-solid fa-caret-right"></i>Play</button>
          <button className='h-[7vh] w-[8rem] border-3 gap-3 flex justify-center text-center  rounded  font-extrabold bg-zinc-600 bg-opacity-65 text-black'><i class="fa-solid fa-circle-exclamation"></i>More Info</button>
        </div>

      </div>
     

    </div>

<NewMovies />
<ActionMovies />
<TrendingMovies />
<HindiMovies />
<InnerFooter />
</>
  )
}

export default FirstInnerBanner;