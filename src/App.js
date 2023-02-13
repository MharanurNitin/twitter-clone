import "./App.css";
import Sidebar from "./section/sidebar/Sidebar";
import Widgets from "./section/widgets/Widgets";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Sidebar className="sidebarapp"/>
      <Outlet className="main"/>
      <Widgets className="widgetsapp" />
    </div>
  );
}

export default App;
