import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import InputForm from "../Components/InputForm";
import PostList from "../Components/PostList";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "../Store/Post-list-store";

function App() {
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar></Sidebar>
        <div className="main-content">
          <Header />
          <div className="content-container">
            <Outlet></Outlet>
          </div>

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
