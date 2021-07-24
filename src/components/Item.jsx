import React,{useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from './ItemForm'
export default function Item({todos,completeTodo, removeTodo, updateTodo, clearComplete, viewCompleted}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    
    if (edit.id) {
        return <TodoForm edit ={edit} onSubmit ={submitUpdate}/>
    }
    
    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.title},
          {todo.price}:-,
          {todo.quantity}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, title: todo.title, price:todo.price, quantity:todo.quantity })}
            className="edit-icon"
          />
        </div>
      </div>
    ));
}

