import React, { useState, useEffect, useRef } from 'react'

export default function Form() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const usernameRef = useRef()

  useEffect(() => {
    usernameRef.current.focus();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(` Username is: ${username} `);
    console.log(` Password is: ${password}`);
    setUsername("")  
    setPassword("")
  };

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={usernameRef} value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">LOGIN</button>
        
      </form>
    </div>
  )
}
