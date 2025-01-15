import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: uuidv4(), text: inputValue }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1 className='Header'>Todo List</h1>
      <div className='InputContainer'>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new todo" 
        className='Input'
      />
      <button onClick={addTodo} className='AddBttn'>➕</button>
      </div>
      <ul className='ListContainer'>
        {todos.map(todo => (
          <li key={todo.id} className='List'>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)} className='DeleteBttn'>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
