import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, minus } from '../slice/Slice';


export default function Redux() {
    const count = useSelector((state) => state.Counterkey);

    const dispatch = useDispatch();
    
    return (
      <div className="container">
        <h1>Counter</h1>
        <h1>{count.count}</h1>
        <button onClick={() => dispatch(add())}>Add</button>
        <button onClick={() => dispatch(minus())}>Minus</button>
      </div>
    );
}