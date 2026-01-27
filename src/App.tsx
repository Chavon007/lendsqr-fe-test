import "./App.css";
// import Login from "./pages/login";
import SiderBar from "./components/sidebar";
import Users from "./components/userslist";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
// import Header from "./components/header";
import UserCard from "./components/card";
import UserDetails from "./pages/userDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
