import "./App.css";
import Login from "../src/pages/login/login";
import Layout from "./layout";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserDetails from "../src/pages/userDetails/userDetails";
import MainUsers from "../src/pages/user/users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/users" element={<MainUsers />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
