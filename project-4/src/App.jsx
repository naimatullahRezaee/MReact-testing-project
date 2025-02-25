import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  let rouster = useRoutes(routes);
  return rouster;
}

export default App;
