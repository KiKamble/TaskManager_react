import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Alert, ListGroup } from 'reactstrap'

import { loadTaskAction } from '../../../actions/TaskAction'

import TaskItem from './TaskItem/TaskItem'

class TaskList extends Component { 
    componentDidMount() {
        this.props.loadTasks()
    }
    render(){

        

        const { tasks } = this.props
        if (tasks.length === 0) {
            return <Alert>No Task to show</Alert>
        }
    
        return (
            <ListGroup>
                {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
            </ListGroup>
        )
    }
   
}

const mapStateProps = (state) => {
    return {
        tasks: state.tasks
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        loadTasks:() => dispatch(loadTaskAction())
    }
}
export default connect(mapStateProps,mapDispatchToProps)(TaskList)