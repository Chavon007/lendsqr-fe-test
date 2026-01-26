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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SiderBar/>} />
      </Routes>
    </Router>
  );
}

export default App;
