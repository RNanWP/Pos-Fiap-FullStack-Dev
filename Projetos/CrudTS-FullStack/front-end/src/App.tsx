import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar" element={<CreateBook />} />
        <Route path="/editar/:id" element={<EditBook />} />
      </Routes>
    </>
  );
};

export default App;
