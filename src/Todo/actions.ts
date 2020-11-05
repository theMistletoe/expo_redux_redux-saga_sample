export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

// TODO 未実装
export const deleteTask = (id: string) => ({
  type: 'DELETE_TASK',
  id
});

// 引数nameをとり、{type: "ADD_NAME", name: name}を返すjsの関数。
export const addTask = (title:string) => ({
  type: 'ADD_TASK',
  title: title,
});