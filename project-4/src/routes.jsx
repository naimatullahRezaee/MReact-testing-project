import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Blog from "./pages/Blog";
import Panel from "./pages/Panel";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import PrivateRoute from "./Components/PrivateRoute";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/course/:courseId", element: <Course /> },
  {
    path: "/blog/*",
    element: <Blog />,
    children: [
      { path: "php", element: <h1>Php Article</h1> },
      { path: "js", element: <h1>JavaScript Article</h1> },
      { path: "react", element: <h1>React Article</h1> },
    ],
  },
  {
    path: "/panel",
    element: (
      <PrivateRoute>
        <Panel />
      </PrivateRoute>
    ),
  },

  {
    path: "/setting",
    element: (
      <PrivateRoute>
        <Setting />
      </PrivateRoute>
    ),
  },

  { path: "/login", element: <Login /> },
];

export default routes;
