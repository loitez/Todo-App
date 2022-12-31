import React,  { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './Create-todo-field/CreateTodoField'

const data = [
    {
        id: '1',
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },
    {
        id: '2',
        title: 'Read next chapter of the book',
        isCompleted: false,
    },
    {
        id: '3',
        title: 'Send the finished assignment',
        isCompleted: false,
    }
]


const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }
    const removeTodo = id => setTodos([...todos].filter(t => t.id !== id))

  return (
    <div className="text-white w-4/5 mx-auto">
        <h1 className='text-2xl font-bold text-center mb-6'>Todo App</h1>
        {todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                changeTodo={changeTodo}
                removeTodo={removeTodo}
            />
        ))}
        <hr className='mt-10 border-none h-0.5 bg-zinc-800'/>
        <CreateTodoField setTodos={setTodos}/>
    </div>
  )
}

export default Home