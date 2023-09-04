import { takeEvery, call, put, all } from 'redux-saga/effects'
import * as types from '../config/ActionTypes'
import * as service from '../services/TaskService'
import * as actions from '../actions/TaskAction'

//worker saga
function* loadTasks() {

    try {
        const tasks = yield call(service.getTasks)
        yield put(actions.tasksLoadedAction(tasks))
    } catch (e) {
        console.log(e)
    }


}
function* addTask({ data }) {
    try {
        const task = yield call(service.addTask, data)
        yield put(actions.taskAddedAction(task))
    } catch (e) {
        console.log(e)

    }

}

function* deleteTask({ id }) {
    try {
        yield call(service.deletTask, id)
        yield put(actions.taskDeleteAction(id))
    } catch (e) {
        console.log(e)

    }

}

//watcher saga
function* watchLoadTasks() {
    yield takeEvery(types.LOAD_TASKS, loadTasks)
}

function* watchAddTask() {
    yield takeEvery(types.ADD_TASK, addTask)
}

function* watchDeleteTask() {
    yield takeEvery(types.DELETE_TASK, deleteTask)
}

export function* taskSaga() {
    yield all([
        watchLoadTasks(),
        watchAddTask(),
        watchDeleteTask()
    ])
}