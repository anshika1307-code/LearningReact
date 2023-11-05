import {useState, useCallback, useEffect, useRef} from 'react'


function App() {
       const [length,setLength]=useState(8);
       const [number,allowNum]=useState(false);
       const [schar,allowChar]=useState(false);
       const [pwd,setpwd]=useState("")
       const pwdRef=useRef(null)
       const pwdGenerator = useCallback(()=>{
        let pass=""
        let str="ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm"
        if(number)str+="0123456789"
        if(schar)str+="!@#$%^&*()+={}[]_-`~"
        for(let i=1;i<=length;i++){
          let char = Math.floor(Math.random() * str.length +1)
          pass+=str.charAt(char)
        }
        setpwd(pass)
       }, [length,schar,number,setpwd])

       useEffect(()=>{
           pwdGenerator()
       },[length,number,schar,pwdGenerator])

       const copyPwdtoClip=useCallback(()=>{
        pwdRef.current?.select();
        window.navigator.clipboard.writeText(pwd)
       },[pwd])
  return (
    //use memoization

    <>
      <div className='h-screen w-full bg-slate-900 top-0 left-0 grid place-content-center'>
         
         <div className='max-w-xl mx-auto shadow-md rounded-lg px-9 py-9 text-orange-500 bg-gray-700'>
            <h1 className='text-4xl text-center text-white mb-7'>Password Generator</h1>
            <div className='flex rounded-lg overflow-hidden mb-7 '>
              <input type="text" className='w-full py-1 px-3 outline-none' value={pwd} placeholder='Password' readOnly ref={pwdRef}></input>
              <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0' onClick={copyPwdtoClip}>copy</button>
            </div>
            <div className='flex text-sm gap-x-4 pb-4'>
              <div className='flex item-center gap-x-1'>
                <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
                <label>Length: {length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input type="checkbox" defaultChecked={allowNum} id="numInput" onChange={(e)=>{allowNum((prev)=>!prev);}}/>
                  <label>Numbers</label>

              </div>
              <div className='flex items-center gap-x-1'>
                  <input type="checkbox" defaultChecked={allowChar} id="numInput" onChange={(e)=>{allowChar((prev)=>!prev);}}/>
                  <label>Characters</label>

              </div>

            </div>
         </div>
         
         
      </div>
    </>
      
    
  )
}

export default App
