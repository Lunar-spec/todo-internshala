import { useState } from "react";

import PropTypes from "prop-types";

import { Check, X, Trash2, Edit } from "lucide-react";

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleSave = () => {
        onEdit(todo.id, editedText);
        setIsEditing(false);
    };

    return (
        <li className="flex items-center justify-between p-3 mb-2 bg-gray-100 rounded shadow-md">
            {isEditing ? (
                <div className="flex items-center gap-2 flex-grow">
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        className="flex-grow p-1 mr-2 border rounded"
                    />
                    <span className="text-xs text-gray-500">
                        Created at: {new Date(todo.id).toLocaleString()}
                    </span>
                    <button onClick={handleSave} className="p-1 text-green-600 hover:text-green-800">
                        <Check size={20} />
                    </button>
                    <button onClick={() => setIsEditing(false)} className="p-1 text-red-600 hover:text-red-800">
                        <X size={20} />
                    </button>
                </div>
            ) : (
                <>
                    <div className="flex items-center flex-grow">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                            className="mr-2 form-checkbox h-5 w-5 text-sky-600"
                        />
                        <span className={`flex-grow capitalize ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                            {todo.text}
                        </span>
                        <span className="text-xs text-gray-500">
                            Created at: {new Date(todo.id).toLocaleString()}
                        </span>
                    </div>
                    <div className="flex">
                        <button onClick={() => setIsEditing(true)} className="p-1 text-sky-600 hover:text-sky-800">
                            <Edit size={20} />
                        </button>
                        <button onClick={() => onDelete(todo.id)} className="p-1 text-red-600 hover:text-red-800">
                            <Trash2 size={20} />
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}

export default TodoItem