/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db} from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

export default function Dashboard() {
  const [user,setUser]=useState()
  const [username,setUsername]=useState()
  const [age,setAge]=useState()
  useEffect(()=>{
    let subscribe = onAuthStateChanged(auth,(currentUser)=>{
      if(currentUser){
        setUser(currentUser)
      }
    })
  },[])

  useEffect(()=>{
    if(user){
      fetchUser()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user])


  const fetchUser = ()=>{
    console.log(user.uid);
    getDoc(doc(db,"users",user.uid))
    .then(data=>{
    console.log(data.data());
      const name = setUsername(data.data().name)
      const age = setAge(data.data().age)
  })
  } 
  return (
    <div>
    <center>
    <br /><br /><br />
        <h1>Welcome</h1> <br /><br /><br /><br /><br />
    <div className="dashboard-card">
        <div className="user-info">
          <h1>User Detail</h1>
            <h2>Name: <span>{username}</span></h2>
            <h2>Age: <span>{age}</span></h2>
        </div>
    </div>
    </center>
    </div>
  )
} 