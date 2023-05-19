import React from 'react'
import styles from './ToDoList.module.css'
import { useState, useEffect } from 'react'
import CreateTask from '../CreateTask/CreateTask'


export default function ToDoList() {

    const [remaining, setRemaining]=useState(0)

    const [task, setTask]=useState([
        {
            title:"Do your workout",
            completed:true

        },
        {
            title:"Grab some pizza",
            completed:false
        }
    ]) 


    useEffect(()=>{
        setRemaining(task.filter(task => !task.completed).length)
    })


    // add new Task taken by user
    function addTask(title){
        const newTask=[...task, {title, completed:false}]
        setTask(newTask)
    }

    // To make line on completed task
    function taskCompleted(index){
        const newTask=[...task]
        newTask[index].completed=true
        setTask(newTask)
    }

    // remove the task
    function removeTask(index){
        const newTask=[...task]
        newTask.splice(index, 1)
        setTask(newTask)
    }

    // All the task value shows here
    function Task({task, index}){
        return (
            <>
            <div
            className={styles.particular}
            style={{textDecoration: task.completed?"line-through":""}}>
                {task.title}
            <button style={{backgroundColor:"red" }} onClick={()=>removeTask(index)}>x</button>
            <button onClick={()=>taskCompleted(index)}>Complete</button>
            </div>
            </>
        )
    }


  return (
    <div className={styles.container}>
    <h1>Pending Tasks ({remaining})</h1>
    <div className={styles.tasks}>
        {
           task.map((ele, idx)=>(
            <Task
                task={ele}
                key={idx}
                index={idx}
            />
           ))
        }    
    </div>
    <CreateTask addTask={addTask}/>
    </div>
  )
}



