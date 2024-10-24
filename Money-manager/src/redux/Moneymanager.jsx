
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMoney } from '../configure/Budgetslice';
import { depositMoney } from '../configure/Expenseslice';

export default function Moneymanager() {

  const dispatch = useDispatch();


  const creditmoney = useSelector((state) => {
    return state.creditKey
  })

  
  const depositmoney = useSelector((state) => {
    return state.depositKey
  })

  const [credit, setCredit] = useState('')
  const [debit, setDebit] = useState('')
  const [title, setTitle] = useState('')



  const handleAdd = () => {
    dispatch(addMoney(credit))
    setCredit('')
  }


  const handleDeb = () => {
    dispatch(depositMoney({ id: Date.now(), debit, title }))
    setDebit('')
    setTitle('')
  }

  return (
    <div>
      <br /><br />
     <center> <h1>Money-Manager</h1> <br /><br /> </center>
      <div className="container">
        <div className="div1">
          <center>
            <br />
            <h1>Credit   Money</h1> <br /><br />
            <input type="text" placeholder='Enter Credit money' value={credit} onChange={(e) => setCredit(e.target.value)} /><br /><br /> <br />
            <button  onClick={handleAdd} >Add Deposite</button> <br /><br /><br />
            <h1> Your Balance :</h1> <br /><br />

            {
              creditmoney &&
              <h1>{creditmoney.amount}</h1>
            }

          </center>
        </div>
        <div className="div2">

          <br />
          <h1>Debit Money</h1> <br /> <br />
          <input type="text" placeholder='Enter Amount' value={debit} onChange={(e) => setDebit(e.target.value)} />
          <input type="text" placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <button onClick={handleDeb}>Debit Money</button> <br /><br />
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Amount</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {
                
                depositmoney &&
                depositmoney.depositMoney.map((e,i) => {
                  return <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.debit}</td>
                    <td>{e.title}</td>
                  </tr>
                })
              };
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}