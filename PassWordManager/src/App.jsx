import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberallowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [isActive, setIsActive] = useState(false)

  // UseRef Hook
  const passwordRef = useRef(null)

  // UseCallback Hook
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+= "0123456789"
    if (charAllowed) str+= "`~!@#$%^&*_+="

    for (let i = 1; i <=length; i++) {
      let char =Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
    window.alert("you have select password and copyClipbroad")
    
    setIsActive(current => !current);

  },[password])

// UseEffect Hook

// useEffect(()=>{
//     passwordGenerator()
//   },[length,numberAllowed,charAllowed,passwordGenerator])

  

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-black bg-gray-800">
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4 pb-4 flex-col">
          <h1 className="text-4xl text-center py-2 text-white">Password Generator</h1>
          <input type="text" value={password} readOnly ref={passwordRef} className="w-full outline-none py-1 px-3 rounded-lg mb-1 text-xl" placeholder="password"/>
          <button onClick={copyPasswordToClipboard} style={{backgroundColor:isActive?"lightskyblue":'',color:isActive?"white":'',}} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg">
            Copy
          </button>
        </div>

        <div className="flex gap-x-2 text-xl text-white">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={50} value={length} className="cursor-pinter "
            onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => setNumberallowed((prev)=>!prev)} />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="numberInput" onChange={() => setCharAllowed((prev)=>!prev)} />
            <label htmlFor="CharacterInput">Characters</label>
          </div>
          <div className="flex items-center gap-x-2">
            <button type="button" className="bg-blue-700 p-2 rounded-lg px-4" onClick={passwordGenerator}>Start</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
