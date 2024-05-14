import React from "react";

export default function UpdateTask({
  selectedTask,
  moveTaskToInProgress,
  moveTaskToTodo,
  moveTaskToDone,
  moveTaskToInProgressFromToDo,
  setSelectedTask,
  updateInProgressTasks,
  updateTodoTasks,
  updateDoneTasks,
}: {
  selectedTask: any;
  moveTaskToInProgress: any;
  moveTaskToTodo: any;
  moveTaskToDone: any;
  moveTaskToInProgressFromToDo: any;
  setSelectedTask: any;
  updateDoneTasks: any;
  updateInProgressTasks: any;
  updateTodoTasks: any;
}) {
  const resetSelectedTask = () => {
    setSelectedTask({ name: "", state: "" });
  };
  const moveUp = () => {
    if (selectedTask.state === "In Progress") {
      moveTaskToTodo();
    } else if (selectedTask.state === "Done") {
      moveTaskToInProgress();
    }
    resetSelectedTask();
  };
  const moveDown = () => {
    if (selectedTask.state === "In Progress") {
      moveTaskToDone();
    } else if (selectedTask.state === "Todo items") {
      moveTaskToInProgressFromToDo();
    }
    resetSelectedTask();
  };
  const removeTask = () => {
    if (selectedTask.state === "In Progress") {
      updateInProgressTasks();
    } else if (selectedTask.state === "Todo items") {
      updateTodoTasks();
    } else if (selectedTask.state === "Done") {
      updateDoneTasks();
    }
  };

  return (
    <div>
      <input placeholder="click on task" value={selectedTask.name} />
      {selectedTask.state !== "Done" && (
        <button type="button" onClick={moveDown}>
          Move Down
        </button>
      )}
      {selectedTask.state !== "Todo items" && (
        <button type="button" onClick={moveUp}>
          Move Up
        </button>
      )}

      <button type="button" onClick={removeTask}>
        Delete
      </button>
    </div>
  );
}
