import { MdDelete as DeleteIcon, MdEdit as EditIcon } from "react-icons/md";
import styles from "./todolist.module.css";

const TaskItem = ({ task, index, isEditMode, onDelete, onEdit }) => {
  return (
    <div className={styles.task_item}>
      <span className={styles.task_text}>
        {index + 1}. {task.text}
      </span>
      <div className={styles.button_group}>
        <button
          disabled={isEditMode}
          onClick={() => onEdit(task, index)}
          className={styles.edit_button}
        >
          <EditIcon />
        </button>
        <button
          disabled={isEditMode}
          onClick={() => onDelete(task.id)}
          className={styles.delete_button}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
export default TaskItem;
