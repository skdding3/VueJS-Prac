import { createStore, Store } from "vuex";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
}

export const store = createStore<State>({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, text: string) {
      state.todos.push({
        id: Date.now(),
        text,
        completed: false,
      });
    },
    removeTodo(state, id: number) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo(state, id: number) {
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
