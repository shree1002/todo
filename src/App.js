// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/Header";
import {Todos} from "./MyComponent/Todos";
import {Footer} from "./MyComponent/Footer";
import {AddTodo} from "./MyComponent/AddTodo";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log(" I am ondelete",todo);
    // let index = todos.indexof(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;

    }));
  }

  const addTodo=(title,desc)=>{
    console.log("I am Debishree Tripathy",title,desc)
    let sno;
    if(todos.length==0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
    sno:1,
    title:"Go to Market",
    desc: "need some Foods"
    },
    {
      sno:2,
      title:"Go to mall",
      desc: "need some Paint"
      },
      {
        sno:3,
        title:"Go to shoppingMall",
        desc: "need some Dress"
        },
  ]);

  return (
    <>
 <Header title=" I am Debishree"/>
 <AddTodo addTodo={addTodo}/>
 <Todos todos={todos}  onDelete={onDelete}/>
 <Footer/>
</>
  );
}

export default App;
