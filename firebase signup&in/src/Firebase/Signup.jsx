import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigation = useNavigate();

    const handelsignup = async ()=>{
        let user  = await createUserWithEmailAndPassword(auth,email,password);
        console.log(user);
        if(user){
            navigation("/dashborad")
        }
    }

  return (
    <div>
      <h1>Sign Up</h1>
      <input type="text" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
    <button onClick={handelsignup}>signup</button>
    <Link to={"/signin"}>  ?  Sign in</Link>

    </div>
  )
}
