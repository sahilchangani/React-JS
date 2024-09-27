import React, { useEffect, useState } from 'react'
import { jsxs } from 'react/jsx-runtime'

export default function Crud() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [subject, setSubject] = useState("")

  const [record, setRecord] = useState(null)
  const [edit, setEdit] = useState(null)

  useEffect(() => {
    let alldata = JSON.parse(localStorage.getItem("student"))
    setRecord(alldata)
  }, [])

  const handleadd = () => {
    let user = { id: Date.now(), name, age, subject }
    let olddata = JSON.parse(localStorage.getItem("student")) || []
    if (edit) {
      let editdata = record.find((item) => item.id == edit)
      editdata.id = edit
      editdata.name = name
      editdata.age = age
      editdata.subject = subject
      localStorage.setItem("student", JSON.stringify(record))
      setEdit(null)
    }
    else {
      olddata.push(user)
      setRecord(olddata)
      localStorage.setItem("student", JSON.stringify(olddata))
    }
    setName("")
    setAge("")
    setSubject("")
  }
  const handledelete = (id) => {
    let deletData = record.filter((item) => item.id != id)
    setRecord(deletData)
    localStorage.setItem("student", JSON.stringify(deletData))
  }
  const handleedit = (id) => {
    let editData = record.find((item) => item.id == id)
    setName(editData.name)
    setAge(editData.age)
    setSubject(editData.subject)
    setEdit(id)
  }

  return (
    <div>
      <center>
        <h1>CRUD</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" /> <br /><br />
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" /> <br /><br />
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Enter Subject" /> <br /><br />
        <button id='s1' onClick={handleadd}>{edit ? "Upate Data" : "Add Data"}</button> <br /><br />
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
              <th>subject</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              record ?
                record.map((item, index) => {
                  return <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.subject}</td>
                    <td><button id='s2' onClick={() => handleedit(item.id)}>Edit</button></td>
                    <td><button id='s3' onClick={() => handledelete(item.id)}>Delete</button></td>

                  </tr>
                }) :
                ""
            }
          </tbody>
        </table>

      </center>
    </div>
  )
}