import React, { useState } from 'react';

export default function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div className="container">
            <h1>Counter App</h1>
            <div className="div">
                <button className="button" onClick={increment}>+</button>
                <div className="display">{count}</div>
                <button className="button2" onClick={decrement}>-</button>
            </div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    );
};

