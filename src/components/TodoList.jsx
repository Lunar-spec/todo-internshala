import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => (
    <ul className="w-full">
        {todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
                onEdit={onEdit}
            />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}


export default TodoList;