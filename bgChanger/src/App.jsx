import {useState} from 'react'

function App() {
    const [color,setcolor]=useState("white");

  return (
    <>
      <div className='h-screen w-full' style={{backgroundColor:color}}>
        <div className='flex fixed flex-wrap bottom-12 px-3 justify-center inset-x-0'>
          <div className='bg-slate-900 flex flex-wrap px-4 py-3 gap-3 rounded-full '>
            <button className='text-white rounded-full px-4 py-1' style={{backgroundColor:"red"}} onClick={()=>setcolor("red")}>Red</button>
            <button className='text-black rounded-full px-4 py-1' style={{backgroundColor:"yellow"}} onClick={()=>setcolor("yellow")}>Yellow</button>
            <button className='text-white rounded-full px-4 py-1' style={{backgroundColor:"blue"}} onClick={()=>setcolor("blue")}>Blue</button>
            <button className='text-white rounded-full px-4 py-1' style={{backgroundColor:"green"}} onClick={()=>setcolor("green")}>Green</button>
            <button className='text-white rounded-full px-4 py-1' style={{backgroundColor:"black"}} onClick={()=>setcolor("black")}>Black</button>
            <button className='text-white rounded-full px-4 py-1' style={{backgroundColor:"olive"}} onClick={()=>setcolor("olive")}>Olive</button>
            <button className='text-black rounded-full px-4 py-1' style={{backgroundColor:"white"}} onClick={()=>setcolor("white")}>Default</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
