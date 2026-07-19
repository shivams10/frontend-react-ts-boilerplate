import { useState } from 'react';

interface TodoFormProps {
  onAddTodo: (title: string) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [todoInput, setTodoInput] = useState<string>('');

  const onTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddTodo(todoInput);
    setTodoInput('');
  };

  return (
    <form className='flex gap-4' onSubmit={onSubmit}>
      <input
        type='text'
        value={todoInput}
        onChange={onTodoChange}
        placeholder='Add New Todo Item'
        className='input flex-1'
      />
      <button type='submit' className='btn-primary'>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
