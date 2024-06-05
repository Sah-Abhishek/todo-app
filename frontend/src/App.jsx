import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
  .then(async (res) => {
    const json = await res.json();
    setTodo(json.todos);
  })
  }, [])


  return (
    <div>
       Hi there
       <CreateTodo />
       <Todo todos={todo}/>
    </div>
  )
}

export default App
