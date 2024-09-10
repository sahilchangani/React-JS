import React, { useRef } from 'react'

export default function UseRef() {
    const inputref=useRef()
    const handle=()=>{
        setTimeout(()=>{
            inputref.current.focus()
            let p=inputref.current.value
            alert(`The value is : ${p}`)
        })
        

    }
  return (
    <>
    <center>  <h1>..useref...</h1>
      <input type="text" ref={inputref}/><br /><br />
      <button onClick={handle}>click</button></center>
</>
)
}