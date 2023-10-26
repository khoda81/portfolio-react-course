import React, { useRef, useState } from "react";

export default function Todo() {
    const [tasks, setTasks] = useState([
        { id: 0, text: "Learn React", completed: false },
        { id: 1, text: "Build a Todo App", completed: false },
        { id: 2, text: "Practice coding", completed: false },
    ]);

    // const [newTask, setNewTask] = useState("");

    // Function to toggle task completion
    const toggleTaskCompletion = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    const inputRef = useRef();

    // Function to add a new task
    const addTask = () => {
        const taskName = inputRef.current.value.trim();
        console.log(taskName);

        if (taskName === "") return;

        const newTask = { id: tasks.length, text: taskName, completed: false };
        inputRef.current.value = "";

        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
    };

    return (
        <div>
            Add task:
            <input ref={inputRef} type="text" placeholder="Add a new task" />
            <button onClick={addTask}>Add</button>
            <h1>Tasks</h1>
            <ul>
                {tasks.map(({ id, text, completed }) => (
                    <li key={id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={completed}
                                onChange={(e) => {
                                    toggleTaskCompletion(id);
                                }}
                            />
                            {text}
                        </label>
                    </li>
                ))}
            </ul>
            Remaining tasks:{" "}
            {
                // Function to calculate the number of remaining tasks
                tasks.filter((task) => !task.completed).length
            }
        </div>
    );
}
