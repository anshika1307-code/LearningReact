import {useState} from 'react'
function App() {
  
  const [counter, setCounter]= useState(15);

  const addValue=()=>{
    if(counter<20){
      setCounter(counter+1);
      
      
    
    }
    
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter -1);
    } 
  }

  return (
    <>
      <div className="h-screen bg-slate-900 text-white grid place-content-center">
        <div className='p-10 border mx-auto bg-black flex flex-col items-center text-2xl rounded-xl'>
         <h1 className='text-3xl text-center mb-4 uppercase'>Counter value : {counter}</h1>
         <button onClick={addValue} className="block text-center items-center border p-4 mb-4 bg-slate-600 hover:bg-slate-700 space-x-4">Add Value</button>
         <button onClick={removeValue} className="block text-center items-center border p-4 mb-4 bg-slate-600  hover:bg-slate-700 space-x-4">Remove Value</button>
        </div>
         
      </div>
    </>
  )
}

export default App
