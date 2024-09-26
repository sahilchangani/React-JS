import React, { useEffect, useState } from 'react'

export default function LocalCut() {
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[subject,setSubjec]=useState("")

    const[record,setRecord]=useState(null)
    const[edit,setEdit]=useState(null)

useEffect(()=>{
    let data=JSON.parse(localStorage.getItem("Student")) || []
    setRecord(data)


},[])

    const handledata=()=>{
        let user={id : Date.now(),name,age,subject}
        let oldRecord=JSON.parse(localStorage.getItem("Student")) || []
        oldRecord.push(user)
        setRecord(oldRecord)
        localStorage.setItem("Student",JSON.stringify(oldRecord))

        setName("")
        setAge("")
        setSubjec("")
    }
    const handledelete=(id)=>{
        let deledata= record.filter((item)=>item.id !=id)
        setRecord(deledata)
        localStorage.setItem("Student",JSON.stringify(deledata))
    }
    const handleedit=(id)=>{
        let editData= record.find((item)=> item.id==id)
        setName(editData.name)
        setAge(editData.age)
        setSubjec(editData.subject)
        setEdit(id)

    }
  return (
    <div>
        
      <center> 
      <h1>CRUD</h1>
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/> <br /><br />
        <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age"/> <br /><br />
        <input type="text" value={subject} onChange={(e)=>setSubjec(e.target.value)} placeholder="Enter Subject"/> <br /><br />
        <button onClick={handledata}>{edit ? "Update Data" : "Add Data"}</button><br /><br />
        
            <table border="1px">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Subject</th>
                    <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record ?
                        record.map((e,i)=>{
                            return <tr key={i}>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.subject}</td>
                                <td><button onClick={()=>handleedit(e.id)}>Edit</button></td>
                                <td><button onClick={()=>handledelete(e.id)}>Delete</button></td>

                            </tr>
                        }):
                        "Loading"
                    }
                </tbody>
            </table>
    
        </center>
      
</div>
)
}