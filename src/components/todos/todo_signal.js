import { computed, signal } from "@preact/signals-react";

export const todos=signal([])
export const searchKey=signal("")
export const filteredTodos=computed(()=>todos.value.filter(todo=>todo.title.includes(searchKey.value)))