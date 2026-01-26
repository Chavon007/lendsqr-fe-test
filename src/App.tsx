import "./App.css";
// import Login from "./pages/login";
import SiderBar from "./components/sidebar";
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
        <Route path="/" element={<UserCard/>} />
      </Routes>
    </Router>
  );
}

export default App;
