import React, { useEffect, useState } from 'react'

export default function Crud() {
    const[task,setTask]=useState("")
    const[record,setrecord]=useState([])
    const[editTask,setEditTask]=useState(null)
    

    useEffect(()=>{
      let alldata=JSON.parse(localStorage.getItem("task"))  || []
      setrecord(alldata)
    },[])

    const handelTask=()=>{
    
        let user={id:Date.now(),task,status:"Pending"}
        let olddata=JSON.parse(localStorage.getItem("task")) || []
        if(editTask){
          let editdata=record.find((item)=>item.id==editTask)
          editdata.id=editTask
          editdata.task=task
          localStorage.setItem("task",JSON.stringify(record))
          setEditTask(null)
        }else{
          olddata.push(user)
          setrecord(olddata)
          localStorage.setItem("task",JSON.stringify(olddata))
        }
        setTask("")

  
    }

    const deletetask=(id)=>{
      let delet=record.filter((item)=>item.id != id)
      setrecord(delet)
      localStorage.setItem("task",JSON.stringify(delet))
    }

    const editbutton=(id)=>{
      let edit=record.find((item)=>item.id==id)
      setTask(edit.task)
      setEditTask(id)
    }
    const editstatus=(id)=>{
      let updatstatus=record.map((item)=>{
       if(item.id===id){
         item.status="Complete"
       }
       return item;
      })
    setrecord(updatstatus)
      localStorage.setItem("task",JSON.stringify(updatstatus))
   }

  return (
    <div>
      <center>
    <div id='a4'>  <br />  <h1>Task Manager</h1>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter your task"/>
        <button onClick={handelTask}>{editTask? "Update Task" :"Add Task"}</button> <br /><br />
        <table>
          <thead>
            <th>Id</th>
            <th>Task</th>
            <th>Status</th>
            <th colSpan={3}>Actions</th>
          </thead>
          <tbody>
            {
              record?
              record.map((item,index)=>{
                return <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.task}</td>
                  <td>{item.status}</td>
                  <td>
                    <button id='a1' onClick={()=>editstatus(item.id)}>Complete</button>
                    <button id='a3' onClick={()=>editbutton(item.id)}>Edit</button>
                    <button id='a2' onClick={()=>deletetask(item.id)}>Delete</button>
                  </td>
                </tr>
              }):"Loding"
            }
          </tbody>
        </table>
        <br />
        </div>
      </center>
</div>
)
}