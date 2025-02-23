<template>
  <div class="container">
    <h1>할 일 목록</h1>

    <div class="input-wrap">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="할 일 입력"
      />
      <button @click="addTodo">추가</button>
    </div>

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
        />
        <span :class="{ done: todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTodos } from "../composables/useTodos";

const { todos, newTodo, addTodo, toggleTodo, removeTodo } = useTodos();
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 20px auto;
}
.input-wrap {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  flex: 1;
  padding: 5px;
}
.done {
  text-decoration: line-through;
}
li {
  margin: 10px 0;
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
