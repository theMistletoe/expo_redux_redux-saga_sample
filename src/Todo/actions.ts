import { Task } from './Types/Task';

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const updateTask = (task: Task) => ({
  type: 'UPDATE_TASK',
  task
});

export const deleteTask = (id: string) => ({
  type: 'DELETE_TASK',
  id
});

// 引数nameをとり、{type: "ADD_NAME", name: name}を返すjsの関数。
export const addTask = (title:string) => ({
  type: 'ADD_TASK',
  title: title,
});