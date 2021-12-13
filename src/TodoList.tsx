
import React from "react";
import {FiltersValueType, TaskType} from "./App";


type TodoListType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    filter: FiltersValueType
    changeFilter: (filter: FiltersValueType) => void
}


 function TodoList(props: TodoListType) {
    const tasksElement = props.tasks.map(t => {
        return (
            <li key={t.id}><input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={() => {
                    props.removeTask(t.id)
                }}>X
                </button>
            </li>
        )
    })
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksElement}

                {/* <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <div>
                <button onClick={() => props.changeFilter('all')}>All</button>
                <button onClick={() => props.changeFilter('active')}>Active</button>
                <button onClick={() => props.changeFilter('completed')}>Completed</button>
            </div>
        </div>
    );
}
export default TodoList;