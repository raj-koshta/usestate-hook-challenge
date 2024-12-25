import React, { useState } from 'react'

import './UseStateHook.css'

const UseStateHook = () => {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const handleInputValueChange = (value) =>{
        setInputValue(value)
    }

    const handleIncBtnClick = ()=>{
        setCount(count + Number(inputValue));
    }

    const handleDecBtnClick = ()=>{
        if(count == 0) return;
        setCount(count - Number(inputValue));
    }

    const handleResBtnClick = ()=>{
        setCount(0);
        setInputValue(1);
    }

    return (
        <div className='container'>
            <h1>useState Challenge</h1>

            <p>Count: <span>{count}</span></p>

            <div className='lebel'>
                <label>Steps:
                    <input type='number'
                        onChange={(event)=>handleInputValueChange(event.target.value)}
                        value={inputValue} />
                </label>
            </div>

            <div className='buttons-div'>
                <button onClick={handleIncBtnClick}>Increment</button>
                <button onClick={handleDecBtnClick}>Decrement</button>
                <button onClick={handleResBtnClick}>Reset</button>
            </div>
        </div>
    )
}

export default UseStateHook
