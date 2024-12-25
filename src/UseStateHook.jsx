import React from 'react'

import './UseStateHook.css'

const UseStateHook = () => {
    return (
        <div className='container'>
            <h1>useState Challenge</h1>

            <p>Count: <span>0</span></p>

            <div className='lebel'>
                <label>Steps: <input type='number' placeholder='1' /></label>
            </div>

            <div className='buttons-div'>
                <button>Increment</button>
                <button>Decrement</button>
                <button>Reset</button>
            </div>
        </div>
    )
}

export default UseStateHook
