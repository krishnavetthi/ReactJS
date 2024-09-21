import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addTodo, removeTodo } from '../features/todoSlice'

function Todos(){
    const todos = useSelector((state)=>state.todos.todos)
    const dispatch = useDispatch()

    const [input,setInput]=useState('');

    function dis(ele){
        dispatch(addTodo(input));
        setInput('');
    }

    return(
        <>
            <div> 
            {todos.map((todo)=>(
                <>
                <h1 key={todo.id}> {todo.text} </h1>
                <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button> 
                </>
            ))}
            </div>
            <div>
            <input
            id="input"
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter Todo"
            value={input}
            // onClick={(e)=>setInput('')}
            onChange={(e) => setInput(e.target.value)}
            />
            <button
            onClick={() =>
             dis(input)}
             >+</button>  
            </div>
        </>
    )
    
}

export default Todos