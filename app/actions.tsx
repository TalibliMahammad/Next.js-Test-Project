'use server'

import { revalidatePath } from "next/cache";



let todos: { id: number; text: string }[] = []
let nextId = 1

export async function addTodo(formData:FormData){
  const text = formData.get('text') as string
  if(!text || !text.trim()) return
  todos.push({id:nextId++, text:text.trim()})


  revalidatePath('/todos')
}

export async function deleteTodo(formData:FormData){
  const id = Number(formData.get('id'))
  todos= todos.filter(t=>t.id !== id)

  revalidatePath('/todos')
}

export async function getTodos(){
  return todos
}