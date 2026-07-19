import { useTodo } from '#/hooks/useTodo';

import TodoFilter from './TodoFilter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const { todos, filter, setFilter, onToggleTodo, onDeleteTodo, onEditTodo, addTodo } = useTodo();

  return (
    <div className='w-screen h-full flex flex-col items-center  bg-slate-50 dark:bg-slate-900 pt-10'>
      <div className='w-full max-w-md rounded-xl bg-white dark:bg-slate-800 dark:border dark:border-slate-700 p-6 shadow-md dark:shadow-none flex flex-col gap-4'>
        <h1 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>Todos</h1>
        <TodoForm onAddTodo={addTodo} />
        <TodoFilter filter={filter} setFilter={setFilter} />
        <TodoList
          filteredTodos={todos}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
