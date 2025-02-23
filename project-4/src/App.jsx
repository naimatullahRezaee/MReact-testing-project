import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Blog from "./pages/Blog";
import Panel from "./pages/Panel";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
