import styles from "./todolist.module.css";

const TodoInput = ({ input, isEditMode, onSave, setInput, onAdd }) => {
  const onInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className={styles.input_container}>
      <input
        className={styles.input_field}
        value={input}
        onChange={onInput}
        type="text"
        placeholder="Enter your todo"
      />
      {!isEditMode && (
        <button
          disabled={input.length < 3}
          className={styles.add_button}
          onClick={onAdd}
        >
          Add
        </button>
      )}
      {isEditMode && (
        <button
          disabled={input.length < 3}
          className={styles.add_button}
          onClick={onSave}
        >
          Save
        </button>
      )}
    </div>
  );
};
export default TodoInput;
