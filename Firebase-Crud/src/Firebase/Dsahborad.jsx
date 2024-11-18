import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db} from '../../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'

export default function Dashboard() {
  const [user,setUser]=useState()
  const [task,setTask] = useState('')
  const [priority , setPriority] = useState('')
  const [record,setRecord] = useState([])
  const [index , setIndex] = useState(null)
  
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
      fetchData()
    }
  },[user])


  const fetchUser = ()=>{
    console.log(user.uid);
    getDoc(doc(db,"users",user.uid))
    .then(data=>{
     console.log(data.data());    
  })
  } 
   

  const fetchData = async ()=>{
    let allData = await getDocs(collection(db ,"Todos"))
    let newData = allData.docs.map((data)=>({docId:data.id,...data.data()}));
    console.log(newData);
    setRecord(newData)
  }


  const handleTask = async ()=> {
    let obj = {uid:user.uid , task ,priority};
    if(index == null){
    const addData = await addDoc(collection(db,"Todos"),obj)
    .then(data=>{
      setRecord([...record ,obj])
    })
    }else{
      let updateData = updateDoc(doc(db,"Todos",index),obj) 
      console.log(updateData);
      fetchData()
    }
    setTask('');
    setPriority('');
    setIndex(null);
  }

  const handleDelete = async (id)=>{
    console.log(id);
    const deleteData = await deleteDoc(doc(db,"Todos",id))
    console.log(deleteData);
    fetchData();
  }

  const handleEdit = (id)=>{
    let singleData = record.find((item )=>item.docId == id)
    setTask(singleData.task)
    setPriority(singleData.priority)
    setIndex(id)
  }

return (
  <div>

    <center>

  <div className="s2">
        <h1>Task Maneger</h1> 
        <input type="text" placeholder='Enter Task' value={task} onChange={(e)=>setTask(e.target.value)}  /> <br /><br />
        <input type="text" placeholder='Enter Priority' value={priority} onChange={(e)=>setPriority(e.target.value)} /> <br /><br />
        <button onClick={handleTask}>{ index== null ? "Add Task" : "Update Task" }</button>  <br /><br />


        <table border={2}>
          <thead>
            <tr>
            <th>Task</th>
            <th>Priority</th>
            <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              record &&
              record.map((e,i)=>{
                if(e.uid === user.uid){
                return <tr key={i}>
                  <td>{e.task}</td>
                  <td>{e.priority}</td>
                  <td><button id='s3' onClick={()=>handleEdit(e.docId)}>Edit</button>
                  <button id='s4' onClick={()=>handleDelete(e.docId)}>Delete</button>
                  </td>
                </tr>
                }
                return;
              })
            }

          </tbody>
        </table>


        
        </div>
        </center>
    </div>
  )
}