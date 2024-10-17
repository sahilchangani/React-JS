import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData, DeleteData, UpdateData } from '../slice/Slice';
export default function Task() {
    const [firstname, setFName] = useState('')
    const [lastname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [task, setTask] = useState('')
    const [index, setIndex] = useState(null)
    const count1 = useSelector((state) => {
        return state.taskKey
    });
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (index == null) {
            dispatch(AddData({ id: Date.now(), firstname, lastname, email, gender, task }))
        } else {
            dispatch(UpdateData({ id: index, firstname, lastname, email, gender, task }))
            setIndex(null)
        }
        setFName('')
        setLName('')
        setEmail('')
        setGender('')
        setTask('')
    }
    const HandleDelete = (id) => {
        dispatch(DeleteData(id));
    }
    const HandleEdit = (id) => {
        let singleData = count1.Taskmanager.find((item) => item.id == id)
        setIndex(id)
        setFName(singleData.firstname)
        setLName(singleData.lastname)
        setEmail(singleData.email)
        setGender(singleData.gender)
        setTask(singleData.task)
    }
    const handleGender = (value) => {
        setGender(value)
    }
    return (
        <div>
            <center>
                <p id='h1'>Taskmanager-Redux</p>
                <input type="text" placeholder='Enter first Name' onChange={(e) => setFName(e.target.value)} value={firstname} /> <br /><br />
                <input type="text" placeholder='Enter last Name' onChange={(e) => setLName(e.target.value)} value={lastname} /> <br /><br />
                <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} /> <br /><br />
                <input type="radio" checked={gender === "Male" ? true : false} style={{ width: "28px", marginLeft: "100px" }} name='Gender' value="male" onClick={() => handleGender("Male")} /> <label htmlFor="">Male</label>
                <input type="radio" checked={gender === "Female" ? true : false} style={{ width: "28px" }} name='Gender' value="female" onClick={() => handleGender("Female")} /> <label htmlFor="">Female</label> <br /><br />
                <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} value={task} /> <br /><br />
                <button id='bt1' onClick={handleAdd} >{index ? "Update Task" : "Add Task"}</button> <br /><br />
                <table border={2} width={"86%"}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Task</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            count1 ?
                                count1.Taskmanager.map((e, i) => {
                                    return (<tr key={i}>
                                        <td>{e.id}</td>
                                        <td>{e.firstname}</td>
                                        <td>{e.lastname}</td>
                                        <td>{e.email}</td>
                                        <td>{e.gender}</td>
                                        <td>{e.task}</td>
                                        <td>
                                            <button id='bt2' onClick={() => HandleDelete(e.id)}>Delete</button>
                                            <button id='bt3' onClick={() => HandleEdit(e.id)}>Edit</button>
                                        </td>
                                    </tr>)
                                }) : "ook"
                        }
                    </tbody>
                </table>
            </center>
        </div>
    )
}