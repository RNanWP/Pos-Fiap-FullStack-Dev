import { useState } from "react";
import TaskList from "./components/pages/TaksList/TaskList";
import AddTask from "./components/pages/AddTask/AddTask";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import Footer from "./components/Footer/Footer";

interface Task {
  id: number;
  name: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    setTasks([...tasks, { id: tasks.length + 1, name: taskName }]);
  };

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <Header />
      <Main>
        <h1>Pendências</h1>
        <AddTask onAddTask={addTask} />
        <TaskList tasks={tasks} onRemoveTask={removeTask} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
