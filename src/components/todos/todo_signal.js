import { computed, signal } from "@preact/signals-react";

export const tasks=signal([])

export const todos = computed(()=>tasks.value.filter((task)=>task.completed===false))

export const completedTasks = computed(()=>tasks.value.filter((task)=>task.completed))