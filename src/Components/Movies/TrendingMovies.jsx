import React from 'react'

function TrendingMovies() {
    const data = [
        {
            id: 1,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_I47jcnzurPahA2dGrDvxx0njJdS0ts1HaHruaANVbC068hxMUVnCqW60U8Q8okGAZV0jJaCEOr6O1weOlpUrFLYC7HM6lXdU.webp?r=850',
            name: 'DAMSEL'
        },
        {
            id: 2,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABapE2MMsh3-UarX2TDYMX4Ok1GYj3Xay1bXWYYK_Nq0F3pO4FAZRYymaL5ZLT51-X2KcF3kpF6NBHy6JhtNaIKhj_day9f5cVyg.webp?r=a5f',
            name: 'MAJNU'
        },

        {
            id: 3,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb1hE_yQI6F1SvsbfkND-EtSIqwVtwNggg8mJe_BI9gpaGZCltV0ho9_2_HknGDX7xioGY0KlUFP5eEbxEodsa6AU-Aq83-i460.webp?r=0b8',
            name: 'WEDNESDAY'
        },

        {
            id: 4,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQBsXmvWvhLRn3w8haV7h2wkdVZ81vWH6BjWuVS4dJRsdgr7QMYsP7P43d8g6PC7CE4bhu6jlNOPob8FjE85pif8OmudeaVhtDU.webp?r=230',
            name: 'YOUNG SELDON'
        },

        {
            id: 5,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTpHFyqZTWvx53uFKMjZ8DXMqxRzFlOlsOhjxEgILuT2kb0L0kv9j2-mZbVualZwtSOrZrHlMZFpg6okEpghdjdFuam_350A5QM.webp?r=7fe',
            name: 'MUBARAK'
        },

        {
            id: 6,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaoPmbOQFzjADveLiof8LcyIzBy8iSRDrsYBaDBZGVDdc7ddluewMNoYbTPF_Trg2INA5FRPmCT9mf4-jFXJpJtoTExpEmNqgfo.webp?r=4a8',
            name: 'CHILLAR PARTY'
        },

        {
            id: 7,
            poster: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcBLHcH7LTcZKug5mv9TOQvbgcMrSLfuqQyIU3eja0OxJtoP_Z2nmjJgsJadlpKw4cX8EVv-7DqZ8yA2PNwrt2AJ-ZRaFkBfysPhnm95EFPzlynRK-25pV3mbfbLFyuqJsTP.jpg?r=33f',
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
            <h1 className='text-white font-extrabold text-2xl  ml-14 mt-[50px]'>Trending Movies</h1>
            <button className='ml-2 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl'> <i class="fa-solid fa-chevron-left"></i></button>
            {data.slice(0, 6).map((value) =>
                <div className='w-50 h-32 rounded relative hover:border-4  hover:border-teal-600'>
                    <h2 className='text-orange-800 text-4xl font-bold absolute bottom-10 left-16'></h2>
                    <img className='h-full   w-full object-cover' src={value.poster} />

                </div>
            )}
                         <button className='ml-6 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl'><i class="fa-solid fa-chevron-right"></i></button>
        </div>

    )
};

export default TrendingMovies;