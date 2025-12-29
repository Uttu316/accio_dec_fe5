import TaskItem from "./todoItem";
import styles from "./todolist.module.css";

const TaskList = ({ tasks, onDelete, isEditMode, onEdit }) => {
  const isEmpty = !tasks.length;
  return (
    <div className={styles.tasklist}>
      {isEmpty && <h3 className={styles.empty_message}>There is no task</h3>}
      {tasks.map((task, index) => (
        <TaskItem
          isEditMode={isEditMode}
          onDelete={onDelete}
          onEdit={onEdit}
          key={task.id}
          task={task}
          index={index}
        />
      ))}
    </div>
  );
};

export default TaskList;
