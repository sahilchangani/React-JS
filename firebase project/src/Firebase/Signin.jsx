// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'

export default function Signin() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate('')
    const handleAdd = ()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(user=>{
            console.log(user.user.uid);
            navigate('/dashboard')
        })
    }
  return (
    <div>
    <center>
      <div className="s1">
        <h1>Sign-in</h1> <br /><br />
        <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} /> <br /><br />
        <input type="text" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} /> <br /><br /> 
        <button onClick={handleAdd}>Login</button> <br /><br />
        <Link to={'/'} style={{fontSize:"20px"}}>Sign up</Link>

    </div>
    </center>
    </div>
  )
}