import { useState } from "react";
import TaskList from "./taskList";
import TodoInput from "./todoInput";

import styles from "./todolist.module.css";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const onAdd = () => {
    const task = {
      id: parseInt(Math.random() * 100000),
      text: input,
      time: Date.now(),
      status: "pending",
    };

    setTasks((curr) => [task, ...curr]); // add new task in beginning of array
    setInput("");
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id)); // filter out the deleted task
  };
  const onEdit = (task, index) => {
    setInput(task.text);
    setEditIndex(index);
  };
  const onSave = () => {
    let currTasks = [...tasks];

    currTasks[editIndex].text = input;

    setTasks(currTasks);
    setEditIndex(null);
    setInput("");
  };

  const isEditMode = editIndex != null;

  return (
    <div className={styles.todolist}>
      <h2 className={styles.todolist_title}>Todo List</h2>
      <TodoInput
        isEditMode={isEditMode}
        input={input}
        setInput={setInput}
        onAdd={onAdd}
        onSave={onSave}
      />
      <TaskList
        isEditMode={isEditMode}
        onDelete={onDelete}
        onEdit={onEdit}
        tasks={tasks}
      />
    </div>
  );
};
export default TodoList;
