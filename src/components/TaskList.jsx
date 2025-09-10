import React, { useState } from 'react'
import TaskEmptyState from './TaskEmptyState';
import TaskCard from './TaskCard';

const TaskList = ({filter = 'all'}) => {
    
    // let filter = 'all';
    const filterTasks = [
        {
            id: 1,
            title: "ABC",
            status: "active"
        },
        {
            id: 2,
            title: "ABCDD",
            status: "complete"
        },
    ]
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
                    />
                ))
            }
        </div>
    )
}

export default TaskList