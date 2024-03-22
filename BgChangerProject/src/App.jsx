import { useState } from "react"

function App() {

  const[color,setColor] = useState('')

  return (
    <>
      <h1 className="flex text-center text-2xl bg-black text-white m-2 p-2 justify-center">Bg Changer Project</h1>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-4 py-4">
          <button onClick={()=>setColor("red")} className="outline-none px-5 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>
            Red
          </button>
          <button onClick={()=>setColor("blue")} className="outline-none px-5 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>
            Blue
          </button>
          <button onClick={()=>setColor("green")} className="outline-none px-5 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>
            Green
          </button>
          <button onClick={()=>setColor("yellow")} className="outline-none px-5 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>
            Yellow
          </button>
          <button onClick={()=>setColor("black")} className="outline-none px-5 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>
            Black
          </button>
          <button onClick={()=>setColor("white")} className="outline-none px-5 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>
            White
          </button>
          <button onClick={()=>setColor("grey")} className="outline-none px-5 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}>
            Grey
          </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
