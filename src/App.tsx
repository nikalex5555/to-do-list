import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}


export type FiltersValueType = 'all' | 'active' | 'completed'

//C-R-UD
function App() {
    //BLL
    //const [filter, setFilter]=useState

    const [tasks, setTasks] = useState/*<Array<TaskType>>*/(
        [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'ReactJS', isDone: false}
        ]
    )
    const [filter, setFilter] = useState<FiltersValueType>('all')

    const changeFilter = (filter: FiltersValueType) => {
        setFilter(filter)
    }
    const removeTask = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id))
    }
    let tasksForRender = tasks;
    if (filter === "active") {
        tasksForRender = tasks.filter(t => !t.isDone)
    }
    if (filter === "completed") {
        tasksForRender = tasks.filter(t => t.isDone)
    }
    /*const TasksForRender=()=>{
        switch(filter){
            case 'completed':
                return tasks.filter(t=>t.isDone)
            case 'active':
                return tasks.filter(t=> ! t.isDone)
            default:
                return tasks
        }*/


// console.log(result)
// const tasks = result[0]
// const setTasks = result[1]
/*let tasks/!*: Array<TasksType> *!/= [
    {id: 1, title: 'HTML&CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'ReactJS', isDone: false}
]*/

/*const removeTask = (id: number) => {
    const filteredTasks/!*: Array<TasksType>не работает*!/ = tasks.filter(t => t.id !== id)
    //const copy=[...tasks]
    /!* tasks = filteredTasks;*!/
    //copy.pop()
    setTasks(filteredTasks)
    console.log(tasks)
}*/
//UI
return (
    <div className="App">
        <TodoList
            filter={filter}
            title={"What to learn"}
            tasks={tasksForRender}
            // tasks={tasks}
            changeFilter={changeFilter}
            removeTask={removeTask}/>


    </div>
);
}

export default App;

