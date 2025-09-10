import React, { useState } from 'react'
import TaskEmptyState from './TaskEmptyState';
import TaskCard from './TaskCard';

const TaskList = ({filter, filterTasks, setNewTaskList}) => {

    if(!filterTasks || filterTasks.length == 0) {
        return <TaskEmptyState filter={filter}/>
    }
    return (
        <div className='space-y-3'>
            {
                filterTasks.map((task, inx) => (
                    <TaskCard 
                        key={inx}
                        task = {task}
                        index = {inx}
                        setNewTaskList={setNewTaskList}
                    />
                ))
            }
        </div>
    )
}

export default TaskList