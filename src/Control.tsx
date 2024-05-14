import React, { useState } from "react";
import Stage from "./Stage";
import Task from "./Task";
import UpdateTask from "./UpdateTask";

export default function Control() {
  var [selectedTask, setSelectedTask] = useState({ name: "", state: "" });

  const [todoList, setTodoList] = useState([
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
  ]);
  const [inProgress, setInProgress] = useState(["Task 5", "Task 6"]);
  const [done, setDone] = useState(["Task 7", "Task 8", "Task 9", "Task 10"]);

  const handleItemCLick = (task: any) => {
    setSelectedTask(task);
  };

  const handleAddTask = (newTask: any) => {
    setTodoList([...todoList, newTask]);
  };

  const moveTaskToTodo = () => {
    setTodoList([...todoList, selectedTask.name]);
    setInProgress(inProgress.filter((task) => task !== selectedTask.name));
  };

  const moveTaskToInProgress = () => {
    setInProgress([...inProgress, selectedTask.name]);
    setDone(done.filter((task) => task !== selectedTask.name));
  };

  const moveTaskToDone = () => {
    setDone([...done, selectedTask.name]);
    setInProgress(inProgress.filter((task) => task !== selectedTask.name));
  };

  const moveTaskToInProgressFromToDo = () => {
    setInProgress([...inProgress, selectedTask.name]);
    setTodoList(todoList.filter((task) => task !== selectedTask.name));
  };
  const updateInProgressTasks = () => {
    setInProgress(inProgress.filter((task) => task !== selectedTask.name));
  };
  const updateTodoTasks = () => {
    setTodoList(todoList.filter((task) => task !== selectedTask.name));
  };
  const updateDoneTasks = () => {
    setDone(done.filter((task) => task !== selectedTask.name));
  };
  return (
    <div>
      <Task onAddTask={handleAddTask} />
      <UpdateTask
        selectedTask={selectedTask}
        moveTaskToTodo={moveTaskToTodo}
        moveTaskToInProgress={moveTaskToInProgress}
        moveTaskToDone={moveTaskToDone}
        moveTaskToInProgressFromToDo={moveTaskToInProgressFromToDo}
        setSelectedTask={setSelectedTask}
        updateInProgressTasks={updateInProgressTasks}
        updateTodoTasks={updateTodoTasks}
        updateDoneTasks={updateDoneTasks}
      />
      <Stage
        stageTitle="Todo items"
        getItems={() => todoList}
        onItemClick={handleItemCLick}
      />
      <Stage
        stageTitle="In Progress"
        getItems={() => inProgress}
        onItemClick={handleItemCLick}
      />
      <Stage
        stageTitle="Done"
        getItems={() => done}
        onItemClick={handleItemCLick}
      />
    </div>
  );
}
