import React from 'react'
import { connect } from 'react-redux'
import { Alert, ListGroup } from 'reactstrap'
import TaskItem from './TaskItem/TaskItem'

const TaskList = props => {    
    const { tasks } = props
    if (tasks.length === 0) {
        return <Alert>No Task to show</Alert>
    }

    return (
        <ListGroup>
            {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        </ListGroup>
    )
}

const mapStateProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateProps)(TaskList)