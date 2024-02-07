import "./App.css";
import {
  BrowserRouter, // Change this line to BrowserRouter
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import TaskState from "./Context/Task/TaskState";
import Alert from "./Components/Alert";

function App() {
  return (
    <>
      <TaskState>
        <BrowserRouter>          
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </TaskState>
    </>
  );
}

export default App;
