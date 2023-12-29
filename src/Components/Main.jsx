import React, { useState } from 'react'

function Main() {

    const [counter,setCounter]=useState(0)//initally set the counter value 0 

    function incrementCounter(){
        setCounter(counter+1)//update the counter value
    }
    function decrementCounter(){
        if(!counter==0){
            setCounter(counter-1)//update the counter value
        }
       
    }
    function resetCounter(){
        setCounter(0)//update the counter value
    }

  return (
    <div className='m-3 p-5'>
        <div className="counter m-5 p-5">
            <h3>Counter App</h3>
            <h1>{counter}</h1>
            <div className="button">
            <button style={{margin:'30px'}} onClick={incrementCounter} className='btn btn-primary'>Increment</button>
            <button style={{margin:'30px'}} onClick={decrementCounter} className='btn btn-danger'>Decrement</button>
            <button style={{margin:'30px'}} onClick={resetCounter} className='btn btn-dark'>Reset</button>

            </div>
           
        </div>
    </div>
  )
}

export default Main