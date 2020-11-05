type Task = {
  id: string;
  title: string;
  description: string;
}

const INITIAL_STATE: Task[] = [
  {
    id: "0",
    title: 'Nanasi',
    description: "test Descriotion"
  }
]

// reducers.js
// reduxではglobal stateを巨大なjson(store)として管理します。stateの変更はjsonの書き換えによってのみ管理します。
// actionは純粋なjsのオブジェクトを作る関数であることを思い出してください。
// reducerはactionで生成されたオブジェクトを受け取り、巨大なjson(store)を書き換える関数です。
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask: Task = {
        id: Math.random().toString(32).substring(2),
        title: action.title,
        description: ""
      };
      return [...state, newTask];
    case 'DELETE_TASK':
      const newTasks: Task[] = state.filter((todo: Task) => todo.id !== action.id);
      return newTasks
    default:
      return state;
  }
}

export default reducer;