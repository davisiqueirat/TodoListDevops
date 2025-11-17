import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Todo({ todo, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.todo);

  const updateTodo = async (todoId, todoStatus) => {
    const res = await fetch(`/api/todos/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({ status: todoStatus }),
      headers: {
        "Content-Type": "application/json"
      } 
    });

    const json = await res.json();
    if(json.acknowledged){
      setTodos(currentTodos => {
          return currentTodos.map((currentTodo) => {
            if (currentTodo._id === todoId){
              return{...currentTodo, status: !currentTodo.status};
            }
            return currentTodo;
          });
      });
    }
  };

  const editTodo = async (event, todoId) => {
    event.preventDefault();
    setTodos(currentTodos => {
      return currentTodos.map(currentTodo => {
        if (currentTodo._id === todoId) {
          return { ...currentTodo, todo: editValue };
        }
        return currentTodo;
      });
    });
    
    const res = await fetch(`/api/todos/${todoId}/edit`, {
      method: "PUT",
      body: JSON.stringify({ todo: editValue }),
      headers: {
        "Content-Type": "application/json"
      } 
    });
  
    const json = await res.json();
    if(json.acknowledged){
      setTodos(currentTodos => {
        return currentTodos.map((currentTodo) => {
          if (currentTodo._id === todoId){
            return{...currentTodo, todo: editValue};
          }
          return currentTodo;
        });
      });
    }
    setIsEditing(false);
  };

  const deleteTodo = async (todoId) => {
    const res = await fetch(`/api/todos/${todoId}`,{
      method: "DELETE"
    });
    const json = await res.json();
    if(json.acknowledged){
      setTodos(currentTodos => {
        return currentTodos.filter((currentTodo) => (currentTodo._id !== todoId));
      })
    }
  };

  useEffect(() => {
    setEditValue(todo.todo);
  }, [todo]);

  return(
    <div key ={todo._id} className="todo">
      {isEditing ? (
        <form onSubmit={(event) => editTodo(event, todo._id)}>
          <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
          <button className="editsalvar" type="submit">Salvar</button>
        </form>
      ) : (
        <>
          <p>{todo.todo}</p> 
          <div className="mutations">  
            <button 
              className="todo__status"
              onClick={() => updateTodo(todo._id, todo.status)}
            >
              {(todo.status)? "☑" : "☐"}
            </button>
            <button
              className="todo__edit "
              onClick={() => {setEditValue(todo.todo); setIsEditing(true);}}
            >
              ✏️
            </button>
            <button
              className="todo__delete"
              onClick={() => deleteTodo(todo._id)}
            >
              🗑️
            </button>
            <Link to="/" className="todo__home-link">Página Inicial</Link>
          </div>
        </>
      )}
    </div>
  )
}