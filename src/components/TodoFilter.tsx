import type { TodoFilterValue } from '#/types/todo';

interface TodoFilterProps {
  label: string;
  value: TodoFilterValue;
}

const TodoFilters: TodoFilterProps[] = [
  { label: 'All', value: 'ALL' },
  { label: 'In Progress', value: 'IN_PROGRESS' },
  { label: 'Completed', value: 'COMPLETED' },
];

const TodoFilter = ({
  filter,
  setFilter,
}: {
  filter: TodoFilterValue;
  setFilter: (value: TodoFilterValue) => void;
}) => {
  const onClickFilter = (value: TodoFilterValue) => {
    setFilter(value);
  };

  return (
    <div className='flex gap-4'>
      {TodoFilters.map(({ label, value }) => {
        return (
          <button
            className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              filter === value
                ? 'bg-white dark:bg-slate-700 text-primary-700 dark:text-white shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
            disabled={filter === value}
            onClick={() => onClickFilter(value)}
            key={value}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default TodoFilter;
