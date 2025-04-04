import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-col items-center mt-20 px-4 text-center'>
            <img src={assets.profile_icon} alt=""
            className='w-36 h-36 rounded-full mb-6'/>
            <h1 className='flex items-center gap-2 text-xl sm:text-3xl'>Hey Developer</h1>
            <h2>Welcome to our app</h2>
            <p>Let's start with a quick product tour and we will have you up and running in no time</p>
            <button>Get started</button>
        </div>
    )
}