import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmpoyeeDashboard = (props) => {
  return (
  
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header data = {props.data} changeUser ={props.changeUser} />
        <TaskListNumber data = {props.data}/>
        <TaskList data = {props.data} />
    </div>

  )
}

export default EmpoyeeDashboard