import { useEffect, useMemo, useState } from 'react';

import type { Todo, TodoFilterValue } from '#/types/todo';
import { getLocalStorage, setLocalStorage } from '#/utils/storage';

const STORAGE_KEY = 'todos';

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>(
    () => getLocalStorage<Todo[]>(STORAGE_KEY) ?? [],
  );
  const [filter, setFilter] = useState<TodoFilterValue>('ALL');

  useEffect(() => {
    setLocalStorage({ key: STORAGE_KEY, value: todoList });
  }, [todoList]);

  const addTodo = (title: string) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return null;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      createdAt: Date.now(),
      isCompleted: false,
    };
    setTodoList(prev => [...prev, newTodo]);
  };

  const onToggleTodo = (id: string) => {
    setTodoList(prev => {
      return prev.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      );
    });
  };

  const onEditTodo = (id: string, title: string) => {
    const trimmedTitle = title.trim();
    setTodoList(prev => {
      return prev.map(todo => {
        if (id === todo.id) return { ...todo, title: trimmedTitle };
        return todo;
      });
    });
  };

  const onDeleteTodo = (id: string) => {
    setTodoList(prev => {
      return prev.filter(todo => todo.id !== id);
    });
  };

  const filteredTodos = useMemo(() => {
    return todoList.filter(todo => {
      if (filter === 'IN_PROGRESS') {
        return !todo.isCompleted;
      }
      if (filter === 'COMPLETED') {
        return todo.isCompleted;
      }
      return true;
    });
  }, [todoList, filter]);

  return {
    todos: filteredTodos,
    filter,
    setFilter,
    onToggleTodo,
    addTodo,
    onEditTodo,
    onDeleteTodo,
  };
};
