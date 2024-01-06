import { Routes, Route, BrowserRouter } from "react-router-dom";
import Counter from "./components/counter/counter";
import Todos from "./components/todos/todos";

function App() {
  return (

    <BrowserRouter >
      <Routes>
        <Route path="/" element={< Counter />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
