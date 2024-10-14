import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent, deleteStudent } from '../slice/Slice'

export default function Reduxcrud() {
    const[name,setName]=useState("")
    const[subject,setSubject]=useState("")

    const data=useSelector((state)=>{
        return state.studentkey
    })

    const dispatch=useDispatch();

    const addRecord=()=>{
        dispatch(addStudent({id:Date.now(),name,subject}))
        setName("")
        setSubject("")
    }



    const deleteRecord=(id)=>{
    dispatch(deleteStudent(id))
    }




  return (
    <div>
      <center>
        <h1>Redux Crud</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/> <br /><br />
        <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder="Enter Subject"/> <br /><br />
        <button onClick={addRecord}>Add Data</button> <br /><br />
        <h2>Data</h2>




        {
            data ?
            data.student.map((e,i)=>{
                return <p key={i}>
                    <p>Id: {e.id}</p>
                    <p>Name: {e.name}</p>
                    <p>Subject: {e.subject}</p>
                    <button onClick={()=>deleteRecord(e.id)}>Delete</button>


                </p>


            }):
            <p>No Data..........</p>
        }
        

      </center>
    </div>
  )
}