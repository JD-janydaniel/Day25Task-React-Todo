import React, { useState } from 'react';
import Inputs from './Components/Inputs';
import Card from './Components/Card';

const App = () => {
  const [todo,setTodo]=useState([])
  const [status,setStatus]=useState('notcompleted')
  const [filter,setFilter]=useState('All')
//filterTodo function is use to filter the Todo by its status
  const filterTodo=()=>{
    if(filter==='completedList'){
      return todo.filter((item)=>item.completed==='completed')
    }
    else if(filter==='notCompletedList'){
      return todo.filter((item)=>item.completed==='notCompleted')
    }
    else{
      return todo
    }
  }
  const addTodo =(newTitle,newDescription,status)=>{
    let data={
      id:todo.length+1,
      title:newTitle,
      description:newDescription,
      completed: status
    }
    setTodo([...todo,data])
  }
  const filteredTodo=filterTodo();

  return (
    <>
      <div className='text-center p-4 '>
      <h1>My todo</h1>
      </div>
      <Inputs addTodo={addTodo} setStatus={setStatus} status={status} setFilter={setFilter} filter={filter} />
      <Card todo={filteredTodo} setTodo={setTodo}/>  
    </>
  );
};

export default App;