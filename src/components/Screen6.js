import React from 'react'
import {useLoaderData} from 'react-router-dom'


function Screen6() {

    const data = useLoaderData()

  return (
    <div className='w-full h-screen flex flex-col justify-center bg-fuchsia-600 items-center'>
        <div className='text-8xl font-semibold mb-3'>User :{data.login}</div>
        <div className='text-5xl font-medium mb-4'> Number of Repose:{data.public_repos}</div>
        <div className='text-5xl font-medium mb-4'> followers:{data.followers}</div>
        <div className='text-5xl font-medium mb-4'> following:{data.following}</div>
        </div>
  )
}

export default Screen6;


//A method which is used to load even when we hover on the screen in header component
export const getGitInfo= async()=>{
    const response = await fetch('https://api.github.com/users/xahmad-ali')
    return response.json();
}