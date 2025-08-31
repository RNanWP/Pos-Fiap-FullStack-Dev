import { useState, useReducer } from "react";
import TaskList from "./components/pages/TaksList/TaskList";
import AddTask from "./components/pages/AddTask/AddTask";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import Footer from "./components/Footer/Footer";
import taskReducer from "./reducers/taksReducer";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const initialState = { tasks: [] };

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (taskName: string) => {
    dispatch({ type: "ADD_TASK", payload: taskName });
  };

  const removeTask = (taskId: number) => {
    dispatch({ type: "REMOVE_TASK", payload: taskId });
  };

  const toggleTask = (taskId: number) => {
    dispatch({ type: "TOGGLE_TASK", payload: taskId });
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
