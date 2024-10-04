import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Update({data,setData}) {
  const navigate = useNavigate();
  const [id , setId] = useState("");
  const [name , setName] = useState("");
  const [subject , setSubject] = useState("");
  const [index , setIndex] = useState(null);
  const handleEdit = () =>{
const oldData = data.find((item)=>item.id == id)
    setIndex(id)
    setName(oldData.name)
    setSubject(oldData.subject)

  }
  const handleUpdate = () =>{
    const conNum = Number(index);
    const updatedData = data.map((item) =>
      item.id === conNum ? { ...item, name: name, subject: subject } : item
    );
    console.log(conNum);
  
    setData(updatedData);
    navigate('/');
  };

  return(
    <>
    <center>
    <h1>Update</h1> <br /><br />
    <input type="text" placeholder='Enter Id'  onChange={(e)=>setId(e.target.value)}/> <br /><br />
    <button onClick={handleEdit} id='bt1'>Get-Data</button> <br /><br />
    <input type="text" placeholder='Enter Name' value={name}  onChange={(e)=>setName(e.target.value)} /> <br /><br />
    <input type="text" placeholder='Enter Subject' value={subject} onChange={(e)=>setSubject(e.target.value)} /> <br /><br />
    <button id='bt3' onClick={handleUpdate} >Update</button>
    </center>
</>
)
}