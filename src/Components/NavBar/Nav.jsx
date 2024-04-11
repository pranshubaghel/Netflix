import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    
    return (
        <div className='h-[100px] bg-transparent flex items-center justify-between '>
            <img className='h-[70px] w-[120px] ml-[50px]' src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" />
            <div className='flex gap-2 px-[50px]' >
                <select className='border border-gray-600  '>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
                <Link to={'Login'}>
                <button  className='border border-gray-600 rounded bg-red-600 text-white h-[40px] w-[75px]'> Sign In</button>
                </Link>
            </div>

        </div>

    )
};

export default Nav;