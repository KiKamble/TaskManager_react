import * as types from '../config/ActionTypes'

export const loadTaskAction =()=>{
    return {
        type:types.LOAD_TASKS
    }
}

export const tasksLoadedAction =tasks=>{
    return {
        type:types.TASKS_LOADED,
        tasks
    }
}
/**
 * 
 * @params (title,description) data
 */
export const addTaskAction = (data) => {
    return {
        type: types.ADD_TASK,
        data
    }
}

export const taskAddedAction = (task)=>{
    return{
        type: types.TASK_ADDED,
        task
    }
}
export const deleteTaskAction = (id) => {
    return {
        type: types.DELETE_TASK,
        id
    }
}
export const taskDeleteAction = (id)=>{
    return{
        type: types.TASK_DELETED,
        id
    }
}