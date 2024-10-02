import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-white bg-cover bg-no-repeat bg-center justify-between flex flex-col bg-gray-100">
      <nav>
        <Header />
      </nav>
      <main className="container mx-auto px-4 max-w-md">
        <form onSubmit={addTodo} className="mb-8 flex shadow-lg">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
            className="flex-grow p-2 border rounded-l focus:outline-none border-sky-500"
          />
          <button
            type="submit"
            className="bg-sky-600 text-white px-4 py-2 rounded-r hover:bg-sky-700 focus:outline-none"
          >
            Add
          </button>
        </form>
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;