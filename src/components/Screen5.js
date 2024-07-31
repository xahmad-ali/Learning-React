import React from 'react'
import { useParams } from 'react-router-dom';

function Screen5() {

    const {userId} = useParams();

  return (
    <div className='w-full h-screen flex justify-center bg-fuchsia-500'>
        <div className='text-9xl font-semibold'>User:{userId}</div></div>
  )
}

export default Screen5;