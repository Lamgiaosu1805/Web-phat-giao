import React, { useState } from 'react'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { toast } from 'sonner'

const AddTask = ({setNewTaskList}) => {
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const addTask = () => {
        if(newTaskTitle.trim()) {
            const num = Math.random();
            setNewTaskList(prev => [...prev, {
                id: num,
                title: newTaskTitle,
                status: "active"
            }])
            setNewTaskTitle("")
        }
    }
    const handleKeyPress = (event) => {
        if(event.key == 'Enter') {
            addTask()
        }
    }
    return (
        <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
            <div className='flex flex-col gap-3 sm:flex-row'>
                <Input 
                    type="text"
                    placeholder="Cần phải làm gì ?"
                    className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    value={newTaskTitle}
                    onChange={(event) => setNewTaskTitle(event.target.value)}
                    onKeyPress ={handleKeyPress}
                />
                <Button variant={"gradient"} size={"xl"} className={"px-6"} onClick={() => addTask()}>
                    <Plus className='size-5'/>
                    Thêm
                </Button>
            </div>
        </Card>
    )
}

export default AddTask