import * as todoTypes from '../action'
const initState = {
  todos: [],
  isTodo: true,
  doing: false,
  done: false
}

export function todoList(state=initState,action){
  switch(action.type){
      case todoTypes.ADD_TODO:
          return {
              ...state,
              todos: action.text,
              isTodo: true,
              doing: false,
              done: false
          }
      default:
            return state
  }
}
