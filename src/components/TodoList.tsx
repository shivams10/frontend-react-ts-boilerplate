import { useState } from 'react';

import type { Todo } from '#/types/todo';

interface TodoListProps {
  filteredTodos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string, title: string) => void;
}

const TodoList = ({ filteredTodos, onToggleTodo, onDeleteTodo, onEditTodo }: TodoListProps) => {
  const [editTodoId, setEditTodoId] = useState<string | null>(null);
  const [draftTodo, setDraftTodo] = useState('');

  const handleEditTodo = (id: string, title: string) => {
    setEditTodoId(id);
    setDraftTodo(title);
  };

  const saveDraftTodo = (id: string) => {
    onEditTodo(id, draftTodo);
    setDraftTodo('');
    setEditTodoId(null);
  };

  return (
    <ul className='flex flex-col gap-1'>
      {filteredTodos?.map((todo: Todo) => {
        return (
          <li
            key={todo.id}
            className='group flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-700/50'
          >
            <input
              className='h-6 w-6 accent-primary-500'
              type='checkbox'
              checked={todo.isCompleted}
              onChange={() => onToggleTodo(todo.id)}
            />
            <input
              className='input flex-1'
              type='text'
              onChange={e => setDraftTodo(e.target.value)}
              readOnly={todo?.id !== editTodoId}
              value={editTodoId === todo.id ? draftTodo : todo?.title}
            />
            {editTodoId === todo.id ? (
              <button className='btn-primary' onClick={() => saveDraftTodo(todo.id)}>
                Save
              </button>
            ) : (
              <button className='btn-ghost' onClick={() => handleEditTodo(todo.id, todo.title)}>
                Edit
              </button>
            )}
            <button className='btn-danger' onClick={() => onDeleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
