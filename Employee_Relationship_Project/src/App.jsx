import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => (
  <div className="app-container">
    <Sidebar />
    <div className="main-content">
      <Header />
      <div className="content-container">
        {/* The `Outlet` renders child routes */}
        <Outlet />
      </div>
      <Footer />
    </div>
  </div>
);

export default App;
