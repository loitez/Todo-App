import React, {useState} from 'react'
import {MdAdd} from 'react-icons/md'


const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('')

    const addTodo = title => {
        setTodos( prev => [
            {
                id: new Date(),
                title,
                isCompleted: false
            },
            ...prev,
        ])
        setTitle('')
    }

  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-none py-3 px-5 w-full mt-5'>
        <MdAdd size={24} className='text-pink-400 mr-3'/>
        <input
            type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            onKeyPress={e => e.key === 'Enter' && addTodo(title)}
            className='bg-transparent w-full border-none outline-none'
            placeholder='Add a task'
        />
    </div>
  )
}

export default CreateTodoField