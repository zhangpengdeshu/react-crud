export const ADD_TODO = 'ADD_TODO'
export const CHANGE_TODO_TO_DOING = 'CHANGE_TODO_TO_DOING'
export const CHANGE_DOING_TO_DONE = 'CHANGE_DOING_TO_DONE'
export const CHANGE_DONE_TO_DOING = 'CHANGE_DONE_TO_DOING'
export const CHANGE_DOING_TO_TODO = 'CHANGE_DOING_TO_TODO'

export function addToDo(text){
  return {
    type: ADD_TODO,
    text
  }
}
