import AddTask from '@/components/AddTask'
import DateTimeFilter from '@/components/DateTimeFilter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StatsAndFilters from '@/components/StatsAndFilters'
import TaskList from '@/components/TaskList'
import TaskListPagination from '@/components/TaskListPagination'
import { dataTest } from '@/lib/dataTest'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const [filterType, setFilterType] = useState('all')
    const [taskBuffer, setTaskBuffer] = useState([])
    const activeTask= taskBuffer.filter((task) => task.status == 'active')
    const completeTask = taskBuffer.filter((task) => task.status == 'complete')
    const activeTaskCount = activeTask.length
    const completeTaskCount = completeTask.length
    useEffect(() => {
       setTaskBuffer(dataTest)
    }, [])
    const filterTask = () => {
        switch (filterType) {
            case "active":
                return activeTask
            case "completed":
                return completeTask
            default:
                return taskBuffer;
        }
    }
    return (
        <div className="min-h-screen w-full bg-[#fefcff] relative">
        {/* Dreamy Sky Pink Glow */}
        <div
            className="absolute inset-0 z-0"
            style={{
            backgroundImage: `
                radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
                radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
            }}
        />
            <div className='container pt-8 mx-auto relative z-10'>
                <div className='w-full max-w-2xl p-6 mx-auto space-y-6'>
                    <Header />
                    <AddTask setNewTaskList={setTaskBuffer}/>
                    <StatsAndFilters completedTasksCount={completeTaskCount} activeTasksCount={activeTaskCount} filter={filterType} setFilter={setFilterType}/>
                    <TaskList filter={filterType} filterTasks={filterTask()} setNewTaskList={setTaskBuffer}/>
                    <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
                        <TaskListPagination />
                        <DateTimeFilter />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default HomePage