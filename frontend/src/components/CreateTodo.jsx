import { useState } from "react";
import axios from 'axios';

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //
  const handleAddTodo = () => {
    const todoData = {
      title: title,
      description: description
    }
    axios.post("http://localhost:3000/todo", todoData, {
      headers: {
        "Content-type" : "application/json"
      }
    })
    .then((res) => {
      if (res.status == 200){
        alert("Todo added");
        setTitle("");
        setDescription("");
      }else{
        throw new error("Failed to add new todo")
      }
    })
    .catch(err => {
      console.log("Failed to add new todo", err)
    })
  }

  //
  return (
    <div>
        <input id="title" style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1x solid black",
        }} type="text" placeholder="title" onChange={(e)=> {
          const value = e.target.value;
          setTitle(value);
        }}/><br />
        <input id="desc" style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1px solid black",
            
        }} type="text" placeholder="description" 
        onChange={(e)=> {
          const value = e.target.value;
          setDescription(value);
        }}
        /><br />
        <button style={{
            padding: 10,
            margin: 10,
            borderRadius: 4,
            border: '1 solid black',
        }} onClick={handleAddTodo
        //   ()=>{
        //   fetch("http://localhost:3000/todos",{
        //     method: "POST",
        //     body: {
        //       title: title,
        //       description: description

        //     }
        //   }
        //   )
        //   .then(async (res)=>{
        //     const json = await res.json();
        //     alert("Todo added");
        //   })
        // }
      }
        >Add a todo</button>
    </div>
  )
}

export default CreateTodo