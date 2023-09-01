import React from 'react'
import { Row, Col } from 'reactstrap'
import TaskList from './TaskList/TaskList'
import TaskForm from './TaskForm/TaskForm'


const TaskManager =()=> {   
        return (
            <Row>
                <Col>
                    <TaskForm/>
                </Col>
                <Col>
                    <TaskList />
                </Col>

            </Row>
        )    
}

export default TaskManager