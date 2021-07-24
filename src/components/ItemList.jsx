import React, {useState, useEffect} from 'react'
import Todo from './Item'
import TodoForm from './ItemForm'

export default function TodoList() {
    const [todos, setTodos] = useState([])


    const addTodo = todo => {
        // Type-in verification
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }
    
    const updateTodo = (todoId, newValue) => {
      // Type-in verification
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
        setTodos(prev => prev.map((todo) => (todo.id === todoId? newValue : todo )))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    const removeTodo = id => {
        const afterRemoveArray= [...todos].filter(todo => todo.id !== id) 
        setTodos(afterRemoveArray);
    }

    const clearCompleted = () =>{
        let cleared = [...todos].filter(todo => {
            return !todo.isComplete
        })
        setTodos(cleared)
    } 

    const viewCompleted = () =>{
        let completedList = [...todos].filter(todo => {
            return todo.isComplete
        })
        setTodos(completedList);
    }

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos) {
        setTodos(todos);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    return (
      <div>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          clearCompleted={clearCompleted}
          viewCompleted={viewCompleted}
        />
        
        {/* Todo: Toggle between Add-button Component to Form*/}
        <button onClick={clearCompleted} className="button">
          Clear Completed
        </button>
        <br />
        <button onClick={viewCompleted} className="button yellow">
          View Completed
        </button>
      </div>
    );
}