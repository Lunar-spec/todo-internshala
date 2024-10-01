import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import TodoList from "./components/TodoList"

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <TodoList />
      <TodoItem />
    </div>
  )
}

export default App