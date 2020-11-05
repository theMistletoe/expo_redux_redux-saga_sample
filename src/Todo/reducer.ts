type Task = {
  title: string;
}

const INITIAL_STATE: Task[] = [
  {title: 'Nanasi'}
]

// reducers.js
// reduxではglobal stateを巨大なjson(store)として管理します。stateの変更はjsonの書き換えによってのみ管理します。
// actionは純粋なjsのオブジェクトを作る関数であることを思い出してください。
// reducerはactionで生成されたオブジェクトを受け取り、巨大なjson(store)を書き換える関数です。
const reducer = (state = INITIAL_STATE, action) => {  
  switch (action.type) {
    case 'ADD_TASK':
      const xxx = {title: action.title};
      return [...state, xxx];
    case 'DELETE_NAME':
      return {...state, name: ''}
    default:
      return state;
  }
}

export default reducer;