import React, { useState } from "react";
function QueryDropdown() {
    const [visibility, setVisibility] = useState({});
    const toggleVisibility = (index) => {
        setVisibility(preVisibility => ({
            ...preVisibility,
            [index]: !preVisibility[index]
        }))
    };
    return (
        <div className="w-full h-[150vh] bg-black border-t-4 border-gray-200 flex justify-center items-center">
            <div className="w-4/5 h-fit py-20 bg-transparent">
                <h1 className="font-extrabold text-5xl text-gray-50 text-center mt-3">Frequently Asked Questions</h1>

                <div onClick={() => toggleVisibility(0)} className="w-full h-fit bg-zinc-600 px-10 py-6 text-white text-semibold text-xl cursor-pointer mt-20  flex
                 justify-between items-center">What is Netflix <i className={`fa-solid fa-plus transform ${visibility
                    [0] ? 'rotate-45' : ''}`}></i>
                </div>
                <div className={`faq-answer py-3 px-4 transition-all duration-500 bg-zinc-600 ${visibility
                [0] ? 'block opacity-100 border border-gray-200' : 'hidden opacity-0'}`} >

                    Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                    movies, anime, documentaries and more – on thousands of internet-connected devices. <br /
                    >

                    You can watch as much as you want, whenever you want, without a single ad – all for one
                    low monthly price. There's always something new to discover, and new TV shows and
                    movies are added every week!
                </div>

                <div onClick={() => toggleVisibility(1)} className="w-full h-fit bg-zinc-600 px-10 py-6 mt-3 text-white text-semibold tex-xl flex 
                justify-between cursor-pointer items-center ">How much does Netflix Cost<i className={`fa-solid fa-plus transform ${visibility
                    [1] ? 'rotate-45' : ''}`}></i></div>
                <div className={`faq-answer py-3 px-4 transition-all duration-500 bg-zinc-600 ${visibility
                [1] ? 'block opacity-100 border border-gray-200' : 'hidden opacity-0'}`} >

                    Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                    movies, anime, documentaries and more – on thousands of internet-connected devices. <br /
                    >

                    You can watch as much as you want, whenever you want, without a single ad – all for one
                    low monthly price. There's always something new to discover, and new TV shows and
                    movies are added every week!
                </div>
                <div onClick={() => toggleVisibility(2)} className="w-full h-fit bg-zinc-600 px-10 py-6  text-white text-semibold tex-xl flex mt-3
                 justify-between items-center mt-">Where can I watch? <i className={`fa-solid fa-plus transform ${visibility
                    [2] ? 'rotate-45' : ''}`}></i></div>

                <div className={`faq-answer py-3 px-4 transition-all duration-500 bg-zinc-600 ${visibility
                [2] ? 'block opacity-100 border border-gray-200' : 'hidden opacity-0'}`} >

                    Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                    movies, anime, documentaries and more – on thousands of internet-connected devices. <br /
                    >

                    You can watch as much as you want, whenever you want, without a single ad – all for one
                    low monthly price. There's always something new to discover, and new TV shows and
                    movies are added every week!
                </div>

                <div onClick={() => toggleVisibility(3)} className="w-full h-fit bg-zinc-600 px-10 py-6 mt-3 text-white text-semibold tex-xl flex 
                 justify-between items-center">How do I cancel? <i className={`fa-solid fa-plus transform ${visibility
                    [3] ? 'rotate-45' : ''}`}></i></div>

                <div className={`faq-answer py-3 px-4 transition-all duration-500 bg-zinc-600 ${visibility
                [3] ? 'block opacity-100 border border-gray-200' : 'hidden opacity-0'}`} >

                    Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                    movies, anime, documentaries and more – on thousands of internet-connected devices. <br /
                    >

                    You can watch as much as you want, whenever you want, without a single ad – all for one
                    low monthly price. There's always something new to discover, and new TV shows and
                    movies are added every week!
                </div>

                <div onClick={() => toggleVisibility(4)} className="w-full h-fit bg-zinc-600 px-10 py-6 mt-3 text-white text-semibold tex-xl flex *
                 justify-between items-center">What can I watch on Netflix? <i className={`fa-solid fa-plus transform ${visibility
                    [4] ? 'rotate-45' : ''}`}></i></div>

                <div className={`faq-answer py-3 px-4 transition-all duration-500 bg-zinc-600 ${visibility
                [4] ? 'block opacity-100 border border-gray-200' : 'hidden opacity-0'}`} >

                    Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                    movies, anime, documentaries and more – on thousands of internet-connected devices. <br /
                    >

                    You can watch as much as you want, whenever you want, without a single ad – all for one
                    low monthly price. There's always something new to discover, and new TV shows and
                    movies are added every week!
                </div>

                <div onClick={() => toggleVisibility(5)} className="w-full h-fit bg-zinc-600 px-10 py-6 mt-3 text-white text-semibold tex-xl flex *
                 justify-between items-center">Is Netflix good for kids?  <i className={`fa-solid fa-plus transform ${visibility
                    [5] ? 'rotate-45' : ''}`}></i></div>

                <div className={`faq-answer py-3 px-4 transition-all duration-500 bg-zinc-600 ${visibility
                [5] ? 'block opacity-100 border border-gray-200' : 'hidden opacity-0'}`} >

                    Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                    movies, anime, documentaries and more – on thousands of internet-connected devices. <br /
                    >

                    You can watch as much as you want, whenever you want, without a single ad – all for one
                    low monthly price. There's always something new to discover, and new TV shows and
                    movies are added every week!
                </div>

                <div className='flex items-center justify-center pt-[80px] '>
                    <div className="text-white mb-6">
                        <p className='text-center text-xl'> Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                </div>
                <div className='flex  items-center justify-center gap-2 pt-2 mb-12 '>
                    <input className='h-[50px] w-[400px] bg-transparent border border-gray-600 rounde ' placeholder='Email address' />
                    <button className='border border-gray-600 rounded bg-red-600 text-white h-[55px] w-[150px] text-[20px] font-bold'>Get Started </button>
                </div>

            </div>

        </div>
    )
};
export default QueryDropdown;