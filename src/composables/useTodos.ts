import { ref } from "vue";
import { useStore } from "vuex";

export function useTodos() {
  const store = useStore();
  const newTodo = ref("");

  const addTodo = () => {
    if (newTodo.value.trim()) {
      store.commit("addTodo", newTodo.value);
      newTodo.value = "";
    }
  };

  const toggleTodo = (id: number) => {
    store.commit("toggleTodo", id);
  };

  const removeTodo = (id: number) => {
    store.commit("removeTodo", id);
  };

  return {
    todos: store.state.todos,
    newTodo,
    addTodo,
    toggleTodo,
    removeTodo,
  };
}
