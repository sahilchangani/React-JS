import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count , setCount]=useState(0) 
  return (
<div>
{
    useEffect(function () {
    console.log("useEffect is running")
},[count])
}
<center><h1>{count}</h1>
<button onClick={() => setCount(count + 1)}>Increment</button>
</center></div>
  )
}