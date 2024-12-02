import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../../src/Features/CounterSlice'


export default function Jewelery() {
    const dispatch = useDispatch()
    useEffect (()=>{
        dispatch(fetchApi())
    },[])

    const recordData = useSelector((state)=>{
        return state.pageKey
    })

  return (

    <div>
        <h1>Jewelery</h1>

    <div className="container">
    {recordData.data && 
      recordData.data.map((e,i)=>{
        if(e.category ==="jewelery"){
            return <ul key={i} className='item'>
                {<img src={e.image} alt="" className='image' />}
                <li className='title'>{e.title}</li>
                <li className='category'>{e.category}</li>
                <li className='price'> {e.price}</li>
            </ul>
        }

        })
    }

              <div className="s1">
          <button> <a href="/"> All </a> </button>
      <button><a href="/Men">Men&lsquo;s clothing </a></button>
      <button><a href="/Jewelery">Jewelery </a></button>
      <button><a href="/Electronic">Electronics</a> </button>
      <button><a href="/Women">Women&lsquo;s clothing</a> </button>
   </div>
    </div>


    </div>
  )
}