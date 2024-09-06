import React, { useState } from 'react'

export default function Event() {
    const[count,setCount]=useState(0)
    const[name,setName]=useState("")
    const[sub,setSub]=useState("")
    const handleSubmit=(event)=>{
      event.preventDefault()
      console.log("Form Submit sucessfull...");
      let obj={
        name:name,
        sub:sub

      }
      console.log(obj)
    }

      
  return (
    <div>
      <center>
      <h1>{count}</h1>

      <button onClick={()=>setCount(count+1)}>Add</button><br /><br />

      <h1>Form</h1>

      <form onSubmit={(event)=>handleSubmit(event)} action="">
      <input onChange={(e)=>setName(e.target.value)} type="text" /> <br /><br />
      <input type="text" onSubmit={(e)=>setSub(e.target.value)} />
      <p>{name}</p><br /><br />
      <button type='submit'>Submit</button>
      </form>
      </center>
    </div>
  )
}