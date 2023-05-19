import style from './CreateTask.module.css';

import React, { useState } from 'react'

export default function CreateTask({addTask}) {
    const [input, setInput]=useState("")

    function handleInput(e){
        e.preventDefault()
        if (!input) return;
        
        addTask(input)
        setInput("")
    }

  return (
    <form onSubmit={handleInput}>
    <input className={style.newitem}
        placeholder='Write task'
        onChange={(e)=>setInput(e.target.value)}
        value={input}
    />
    </form>
  )
}
