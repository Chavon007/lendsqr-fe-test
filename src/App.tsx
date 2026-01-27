import "./App.css";
// import Login from "./pages/login";
import SiderBar from "./components/sidebar";
import UserTable from "./components/userinfo";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
// import Header from "./components/header";
import UserCard from "./components/card";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserTable />} />
      </Routes>
    </Router>
  );
}

export default App;
