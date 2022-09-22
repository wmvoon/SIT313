import './App.css';
import Header from './Header.jsx'
import Footer from './Footer';
import Content from './Content';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import "firebase/auth";
import { UserProvider } from './context/UserContext';
import { useContext } from "react";
import { UserContext } from "./context/UserContext";


function App() {
  const currentUser = useContext(UserContext)
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
