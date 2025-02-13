import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps{
    todo:Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;

}

export default function TodoItem({todo, onCompletedChange, onDelete}: TodoItemProps){
    return(
        <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white shadow-sm hover:shadow-md transition-all">
            <label className="flex-items-center gap-3  grow">
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                className="scale-125"
                />
                <span className={todo.completed ? "line-through text-gray-400" : ""} >
                    {todo.title}
                </span>
            </label>
            <button onClick={() => onDelete(todo.id)}
            className="p-2">
                <Trash2 size={20} className="text-gray-500"/>
            </button>
        </div>
    )
}