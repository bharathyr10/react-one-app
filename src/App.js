import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./features/home/Home";
import NavBar from "./features/navBar/NavBar";

export default function App() {
  return (
    <div>
      <React.Fragment>
        <NavBar />
      </React.Fragment>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </div>
  );
}
