export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export let todos: Todo[] = [
  { id: 1, text: "Müştərilərlə danış", completed: false },
  { id: 2, text: "satışlara nəzər yetir", completed: false },
  { id: 3, text: "problemleri aradan qaldır", completed: false },
];

export let nextId = 4;
