import "./App.css";
import Login from "./pages/login";
import Layout from "./layout";
import Users from "./components/userslist";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import UserDetails from "./pages/userDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
