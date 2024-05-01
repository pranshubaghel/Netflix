import React from 'react'

function HindiMovies() {
const data =  [

    {
        id : 1,
        img : 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd6doKSKHPmPm7kjsjJ7POcxeaaORsw3lti0m_9K8B5ge6WU0KD5kBrtM1YS6tX9ULayyQWJphZgDwWS7moY7gG00OhlnGam2Vg.webp?r=2b1',
        name : ""
    },
    {
        id : 2,
        img : 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSD7BHnOVfSJmIzitoNhIWnQW46umTzvmEEaZxHV7C9ONBwHt7genDym2vrkytAo0mV2m8oRV2JkBjpalN66DgT5chboAZaaTFI.webp?r=e31',
        name : ""
    },
    {
        id : 3,
        img : 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWwc7jXFfDLj0cajbBTHhnczZk9KF-3lIty7rP7R0H0Iw-V65dYBlw0-wfpiNncRYwfjD3VhC8hbiDeHHiUigDS_D9sob2hFJBlAD7puOyfGKrVonMsBJw5aAyOwKcD2Edt8.jpg?r=32d',
        name : ""
    },
    {
        id : 4,
        img : 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRpI8aMehR3MdeombWcSiYXS7mfvKMRK2vHQvp9aIPqlxjTz2lqjsw9ne5q2dx3xu2PxSFVGA45Gy4hqe4OW5vymuqfwoQR5ffU.webp?r=cc6',
        name : ""
    },
    {
        id : 5,
        img : 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUjDJv-WOUGLe3sM8VFaZofO0i0R9y91zuyPXIOHYskaUk4G3fZ9eG8dDaWhZbktdkEj7xa1N5CQnvPipMPjKMAzsS-oSWA3n20.webp?r=c71',
        name : ""
    },
    {
        id : 6,
        img : 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT3iPCOOgwPZsc76s8WK8bvkoyKjyjBemHhWDqMTKXlfRxIGhmuLrbeChjwHiAGbbj9ZCFS2jkkKd0386lz_whzZt2lgI1Nvi9w.webp?r=934',
        name : ""
    },
    {
        id : 7,
        img : 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbSxmb5bMC1cww5dWCRkOPOMlk1UvPDs9ty6Rk-OTgTIWO54nBV9FbFDTzDAgffSZmWTIJ19m5Yi4BhYBrQF18vQ_j-0lCVO-jU.webp?r=f4f',
        name : ""
    },
    {
        id : 8,
        img : 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRP0CnRW8mWRRQ2ydx733n9ABH6h-9NyHORbsx7lUoo69K_UBljUm00lYdxllYqGThzy49zKWSYr3lF_5PszIaC4W0MQmQFiq5cQGORYhIbomiR_AYP6CPexQ1R4rPDCrRZc.jpg?r=83c',
        name : ""
    },
    {
        id : 9,
        img : 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbSxmb5bMC1cww5dWCRkOPOMlk1UvPDs9ty6Rk-OTgTIWO54nBV9FbFDTzDAgffSZmWTIJ19m5Yi4BhYBrQF18vQ_j-0lCVO-jU.webp?r=f4f',
        name : ""
    },
  
]
  return (
    <div className='w-full h-auto px-20 py-16 flex  grid-cols-3 bg-black border-t-8 border-emerald-950 gap-10'>
    <h1 className='text-white font-extrabold text-2xl  ml-14 mt-[50px]'>Hindi Movies</h1>
    <button className='ml-2 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl'> <i class="fa-solid fa-chevron-left"></i></button>
    {data.slice(0, 6).map((value) =>
        <div className='w-50 h-32 rounded relative hover:border-4  hover:border-teal-600'>
            <h2 className='text-orange-800 text-4xl font-bold absolute bottom-10 left-16'></h2>
            <img className='h-full w-full object-cover' src={value.img} />

        </div>
    )}
     <button className='ml-6 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl'><i class="fa-solid fa-chevron-right"></i></button>
</div>
  )
}

export default HindiMovies;