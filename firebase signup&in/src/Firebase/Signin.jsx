import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Signup() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate("");

    const handelsignin = async ()=>{
        let user  = await signInWithEmailAndPassword(auth,email,password);
        console.log(user);
        if(user){
            navigate("/dashborad")   
        }
    }

  return (
    <div>
      <h1>Sign in</h1>
      <input type="text" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
    <button onClick={handelsignin}>signin</button>

    </div>
  )
}
