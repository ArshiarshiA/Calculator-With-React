import { useState } from "react"
import './Calculator.css'

export default function Calculator(){

    let [counter , setCounter] = useState('');
    let [status , setStatus] = useState(false);
    let operators = ['*' , '/' , '+' , '-']

    const checkTask = (item) => {
        if(item === 'x') return '*'
        if(item === '÷') return '/'
        return item
    }

    const mainHandler = (event) => {
        let output = checkTask(event.target.innerText);
        if(output === '.'){
            if(status === true) return
            if(status === false) setStatus(true)
        }
        if(operators.includes(output)) setStatus(false)

        setCounter(counter + output)
    }

    const equalTask = () => setCounter(String(eval(counter)));

    const clearTask = () => {
        setCounter('')
        setStatus(false)
    }

    const lastClearTask = () => setCounter(counter.slice(0 , -1))

    return(
    <div className="container">
        <div className="screen">{counter}</div>
        <div className="buttons">
            <button onClick={clearTask} className="special twoCol">Clear</button>
            <button onClick={lastClearTask} className="special">C</button>
            <button onClick={mainHandler} className="special">&#247;</button>
            <button onClick={mainHandler}>7</button>
            <button onClick={mainHandler}>8</button>
            <button onClick={mainHandler}>9</button>
            <button onClick={mainHandler} className="special">x</button>
            <button onClick={mainHandler}>4</button>
            <button onClick={mainHandler}>5</button>
            <button onClick={mainHandler}>6</button>
            <button onClick={mainHandler} className="special">-</button>
            <button onClick={mainHandler}>1</button>
            <button onClick={mainHandler}>2</button>
            <button onClick={mainHandler}>3</button>
            <button onClick={mainHandler} className="special">+</button>
            <button onClick={mainHandler}>0</button>
            <button onClick={mainHandler} className="special">.</button>
            <button onClick={equalTask} className="special twoCol">=</button>
        </div>
        <p className="programmer">Programmer : Arshia Mansury</p>
    </div>
    )
}