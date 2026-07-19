export interface Todo {
  title: string;
  id: string;
  createdAt: number;
  isCompleted: boolean;
}

export type TodoFilterValue = 'ALL' | 'COMPLETED' | 'IN_PROGRESS';
