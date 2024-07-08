import React, { useCallback, useEffect, useRef, useState } from 'react'

function Screen3() {

    const [password,setPassword]=useState('');
    const [length,setLength] = useState(6);
    const [numbersAllowed,setNumbersAllowed]= useState(false);
    const [charactersAllowed,setcharactersAllowed]=useState(false);

    const passwordRef =useRef(null)

    const generatePassword=useCallback(()=>{
        let pas=""
        let str="ABCDEFGHIJKLMNOQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numbersAllowed){
            str+="123456789"
        }
        if(charactersAllowed){
            str+="@#$%^&*<>?/"
        }

        for(let i=1; i<=length; i++){
            const chr=Math.floor(Math.random()*str.length+1)
            pas+=str.charAt(chr)
        }
        setPassword(pas)

    },[length,numbersAllowed,charactersAllowed])

    useEffect(() => {
        generatePassword();
    }, [generatePassword]);


    const copyPassword=()=>{
        window.navigator.clipboard.writeText(password)
        passwordRef.current?.select()
    }
  return (
    <div className='bg-sky-500 w-[1350px] h-[450px] flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold py-8'>
            PassWord Generator
        </h1>
        <div className='rounded-xl shadow'>
            <input 
            type='text'
            className='mt-1 p-2 rounded bg-sky-50 outline-none'
            placeholder='Password'
            value={password}
            readOnly
            ref={passwordRef}
            />
            <button className='bg-sky-600 font-bold w-16 py-2 rounded '
            onClick={copyPassword}>
                Copy
            </button>
        </div>

        <div className='flex p-3'>
            <input 
            type='range'
            className='cursor-pointer '
            max={24}
            min={6}
            value={length}
            onChange={(v)=>setLength(v.target.value)}
            />
            <label htmlFor='length' className='font-medium p-2'>Length:{length} </label>
            
            <input
            type='checkbox'
            className='cursor-pointer ml-4'
            defaultChecked={numbersAllowed}
            onChange={()=>{
                setNumbersAllowed((prev)=> !prev)
            }}
            />
            <label htmlFor='length' className='font-medium p-2'>numbers</label>

            <input
            type='checkbox'
            className='cursor-pointer ml-4'
            defaultChecked={charactersAllowed}
            onChange={()=>{
                setcharactersAllowed((prev)=> !prev)
            }}
            />
            <label htmlFor='length' className='font-medium p-2'>characters</label>
        </div>
    </div>
  )
}

export default Screen3;