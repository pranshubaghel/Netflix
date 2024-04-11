import React from "react";

function FirstBanner() {
    return (
       
        <div className="w-full h-[500px] bg-black border   flex items-center justify-center border-t-8 border-zinc-800">
            <div className="h-[450px] w-[45%]  flex justify-center items-center  text-center ">
                <h1 className=' text-5xl pb-11 text-white  font-extrabold '>Enjoy on your TV</h1>
                <p className='text-left text-2xl text-white'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div>
                <img className="pl-2 h-[450px] " src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
            </div>
        </div>

    )
};
export default FirstBanner;