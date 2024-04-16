import React from 'react'

function ActionMovies() {
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
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV-hssMS6nwdLkOlNblICBMo4ydNuY0fUPfBqGrHKk-09DM4Htty8zV3H1srcHN2rDC61Fb0dgf4LuBA1Ybc6L6p9H3_jNLAYAc.webp?r=ed7',
            name: 'WEDNESDAY'
        },

        {
            id: 4,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXYR-46H07C1-bc4kmXgXHIlsdp9DheXLtIU7SeXw0ltDTMTfH1hYRcesKEhHrJdZrOcdGdN9yHfv8tITZ0xFNlfrLtkP5O5FbVo8Io8u4HezxqvzNQpSpCJ8Hysh-OwiQY4.jpg?r=8ce',
            name: 'YOUNG SELDON'
        },

        {
            id: 5,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXYR-46H07C1-bc4kmXgXHIlsdp9DheXLtIU7SeXw0ltDTMTfH1hYRcesKEhHrJdZrOcdGdN9yHfv8tITZ0xFNlfrLtkP5O5FbVo8Io8u4HezxqvzNQpSpCJ8Hysh-OwiQY4.jpg?r=8ce',
            name: 'MUBARAK'
        },

        {
            id: 6,
            poster: 'https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaN6eWetluEMKgRTSWXDB4_ZZu9SkQN2JqixO3KfgvKQOEoBCGvc1atayuEb3BxlzHHydW1EYpFxeR8hwCg5NUMDdBD04DIK2GE.webp?r=49a',
            name: 'CHILLAR PARTY'
        },

        {
            id: 7,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdBy9tZsqEd_wjjXeGnSQfagZC7vOyt77PweGp11NAokATxT_xuEl1GZoWs2WtoX66KpXCnUujBRUf-ZH4HndftJTjbLg8sLNiErALXtBt7nomvbq78VArpXIIA78ry8aBFC.jpg?r=f21',
            name: 'KANDETHUM'
        },

        {
            id: 8,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdIXi2doSp78r2v6MRCSQkn07DL7FnSwIcKqqA3Dno8DDttXrAhH0JyR3ODIisARrs6e79rV_7aX1wcoQJZLHihMDfipWsqvY4LlCs5UrGsPJzMBC186AXHj1BGZMWxAAQap.jpg?r=e7c',
            name: 'KHAKEE'
        },

        {
            id: 9,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVUOHxFxaNiIIEVOFFxVk3rwnbrV6rp-0DB3c3h-v7xxKobO-Okyj0814C-aqN28U5Lft0ZO-do3gSyN2VUAmDMU6H3ghm0hpcE.webp?r=d64',
            name: 'HUM SATH SATH'
        },




    ]
    return (
        <div className='w-full h-auto px-20 py-16 flex  grid-cols-3 bg-black border-t-8 border-emerald-950 gap-10'>
            <h1 className='text-white font-extrabold text-2xl  ml-14 mt-[50px]'>Action Movies</h1>
            {data.slice(0, 6).map((value) =>
                <div className='w-50 h-32 rounded relative hover:border-4  hover:border-teal-600'>
                    <h2 className='text-orange-800 text-4xl font-bold absolute bottom-10 left-16'></h2>
                    <img className='h-full w-full object-cover' src={value.poster} />

                </div>
            )}
        </div>

    )
};

export default ActionMovies;