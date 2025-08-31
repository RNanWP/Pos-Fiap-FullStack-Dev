import React, { useState, useReducer, useEffect } from "react";
import TaskList from "./components/pages/TaksList/TaskList";
import AddTask from "./components/pages/AddTask/AddTask";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import taskReducer from "./reducers/taksReducer";
import api from "./api";
import "./App.css";

const initialState = { tasks: [] };

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    api
      .get("/tasks")
      .then((response) => {
        dispatch({ type: "SET_TASKS", payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const addTask = (taskName: string) => {
    api
      .post("/tasks", { name: taskName, completed: false })
      .then((response) => {
        dispatch({ type: "ADD_TASK", payload: response.data });
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  const removeTask = (taskId: number) => {
    api
      .delete(`/tasks/${taskId}`)
      .then(() => {
        dispatch({ type: "REMOVE_TASK", payload: taskId });
      })
      .catch((error) => {
        console.error("Error removing task:", error);
      });
  };

  const toggleTask = (taskId: number) => {
    const task = state.tasks.find((task) => task.id === taskId);
    if (task) {
      api
        .put(`/tasks/${taskId}`, { ...task, completed: !task.completed })
        .then((response) => {
          dispatch({ type: "TOGGLE_TASK", payload: taskId });
        })
        .catch((error) => {
          console.error("Error toggling task:", error);
        });
    }
  };

  return (
    <div className="app-container">
      <Header />
      <Main>
        <h1>Pendências</h1>
        <AddTask onAddTask={addTask} />
        <TaskList
          tasks={state.tasks}
          onRemoveTask={removeTask}
          onToggleTask={toggleTask}
        />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
