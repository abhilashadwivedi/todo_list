import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTask from '../modals/CreateTask';

const TodoList = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>
        <div className = "header text-center">
            <h3 >Todo List</h3>
            <button className="btn btn-primary mt-2" onClick ={() => setModal(true)}>Create Task</button>
        </div>
        <div className = "task-container">

        </div>
        <CreateTask toggle = {toggle} modal={modal}></CreateTask>
        </>
    );
};

export default TodoList;