import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Dashboard() {
  let location = useLocation()
  return (
    <>

    <center> <br /><br /><br />
    <h2> Welcome To Dashboard Page</h2> <br /><br /><br />
    <h2>Name :{location.state.name}</h2>

    </center>
    </>
  )
}