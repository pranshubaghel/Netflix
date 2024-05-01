import React from 'react'

function NewMovies() {
    const data = [
        {
            id: 1,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSFPl8VnMACDnMdB3Bvw1bGGNDr6HojoGRHhKZt-R8xaci6kqgU3DzT_wz2YO5UhO9by1PNn886ACujezQoLmdmryysydyVDJZQ.webp?r=2bb',
            name: 'DAMSEL'
        },
        {
            id: 2,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABehZM2_g_zPrcrnD4e-6SFOyheKjYpcH221zoKqPa-tS2DsGiH3Z2ABJ77Ydb9z-5wPVdceyjufvcmjZWjUL8B4Pr0B4pKvsHuy8DhizziipHt9SKdKtGPpOGBWVg7BbzxxL.jpg?r=23e',
            name: 'MAJNU'
        },

        {
            id: 3,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYkgoseD_TOHDLSjIGLHiekygHJvAajW9ZttnvPJI60gRQVMlE9nhMNYPT3WI3BF9DIzkJrEONtWLUwUsSF6W1aV3OfSTmzfY8v9j1P35_hyOM8MiUekrJ1JXCYyk6ZN-4PC.jpg?r=4d2',
            name: 'WEDNESDAY'
        },

        {
            id: 4,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYOSv2XJhtOOxZoDqYpV6u0SCSDe7-CoptcE7d7C-mQG1S8zXfN-XNDIqKk76UVniPM5fHO6rSQJLwK7GURCu11d0Tgv7JKu4NM.webp?r=722',
            name: 'YOUNG SELDON'
        },

        {
            id: 5,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa5njIsdOj8puPXVjOGKe4Wqt9ySRBBwAVTuL5ZXvygbp-JhtHBMKFiHUnoMnj3s__n2ZakdA5hFFj7leKwXWcRiUi_MkrRLQeDwj3-ITCHYSXDDnMewyin1gXN-4ih8-3Tx9TbWIR5vgokTCdO0Bd_HJqzvz8fx74GsvHL0fewZIt23Hk-4UpjLhtJoyFwGwExlrF8KqiKPiE-6RUpN8kfP2T282Ot6GWpJr8XzySXPeDgUg9xBgPoHqrNwKOmdNEjM8vNWwcP0yeVkqv58q53UVEHFKy6K1Lt2fbkqkauPCE1E4qCglgj37uXqEZvqliCcPfvfKNCOuptxVhOk6ZyRovn1Q1FpBQ9P4sv_X9-Y_3oy-O4.jpg?r=ae6',
            name: 'MUBARAK'
        },

        {
            id: 6,
            poster: 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaN6eWetluEMKgRTSWXDB4_ZZu9SkQN2JqixO3KfgvKQOEoBCGvc1atayuEb3BxlzHHydW1EYpFxeR8hwCg5NUMDdBD04DIK2GE.webp?r=49a',
            name: 'CHILLAR PARTY'
        },

        {
            id: 7,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYSWCWNMRu35AXpa2cgGtwiEe_PBPCSW0dmkkOU-GTxVLli6YmjOgQAAktKcYi0x1ibmG5XgxTj-6Gw3r57UseXOfugqz2e7Dwk.webp?r=8e8',
            name: 'KANDETHUM'
        },

        {
            id: 8,
            poster: 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd2Wn75wE_Tk93RYiP13u5zv8d3txyBvAHVx-pOSqZhwxaqT7b6ie2-fiyYfbkmZaMbcG2BOF6N4mm_ozplMR7wYsXDN4bUwoE-D8b7EJTP54ucomb3PmU_opcU8OrmZwg0i.jpg?r=b33',
            name: 'KHAKEE'
        },

        {
            id: 9,
            poster: 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRlwskPD1ZsR_3TYJIQtpgyyV98qIWOVAQP2O1-gdAPyC_DBzSOypYKcVPKxVX0-dpNS23Ae-9FP9Ad8FimJQv5AMCISYHFGw2o.webp?r=e3e',
            name: 'HUM SATH SATH'
        },
    ]
  
    return (
        <div className='w-full h-auto  pb-20 px-20 py-16 flex pt-40 grid-cols-3 bg-black border-t-8 border-emerald-950 gap-10'>
            <h1 className='text-white font-extrabold text-2xl  ml-14 mt-[50px]'>New Movies</h1>
        <button className='ml-2 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl'> <i class="fa-solid fa-chevron-left"></i></button>
            {data.slice(0, 6).map((value) =>
                <div className='w-50 h-32 rounded relative hover:border-4  hover:border-teal-600'>
                    <h2 className='text-orange-800 text-4xl font-bold absolute bottom-10 left-16'></h2>
                    <img className='h-full w-full object-cover' src={value.poster} />

                </div>
            )}
             <button className='ml-6 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl'><i class="fa-solid fa-chevron-right"></i></button>
        </div>

    )
};

export default NewMovies;