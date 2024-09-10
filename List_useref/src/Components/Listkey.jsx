import React from 'react'

export default function Listkey() {
    const arr=["Lion","Tiger","Monkey","Beer"]
    const arrObj=[{name:"John Wick",sub:"React"},{name:"Ryan",sub:"React"}]
  return (
    <>
   <center> <h1>ListKey</h1>
    {
        arr.map((item,index)=>{
            return <div key={index}>{item}</div>
        })

    }
    <h1>ListKey</h1>
    {
        arrObj.map((item,index)=>{
            return <div key={index}>
                <h5>name:{item.name}</h5>
                <h5>subject:{item.sub}</h5> <br />

            </div>
        })
    }
    
    </center>
</>
)
}