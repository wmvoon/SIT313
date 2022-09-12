import React from "react";
import './Header.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from "./Login";
import SignUp from "./Signup";
import "./style.css"
import Banner from "./Banner";

const Header = (props) => {
    return (
        <Router>
            <div className="header-div">
                <p>DEV@Deakin</p>
                <form>
                    <input className="form-control-header" placeholder="Search"></input>
                </form>
                <br />
                <nav>
                    <Link to="/Login">Login</Link>
                    <Link to="/SignUp">SignUp</Link>
                </nav>
            </div>
            <div>
                <Routes>
                    <Route path="/" />
                    <Route className="LoginForm" path="/Login" element={<Login />} />
                    <Route className="Form" path="/SignUp" element={<SignUp />} />
                </Routes>
                <Banner></Banner>
            </div>
        </Router>

    )
}
export default Header;