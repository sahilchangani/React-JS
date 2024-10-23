import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchapi } from '../configure/Apislice'

export default function Apiredux() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchapi())
    },[])
    const record=useSelector((state)=>{
        return state.userkey
    })
  return (
    <div>
      <center>
      <h1 className="redux-api-title">ReduxApi</h1>
<div className="redux-api-container">
  {record.data &&
    record.data.map((item, index) => {
      return (
        <div  key={index}>
          <h6>Title:{item.title}</h6>
          <h6>Price:{item.price}</h6>
          <p>Description:{item.description}</p>
        </div>
      );
    })}
</div>
      </center>
    </div>
  )
}