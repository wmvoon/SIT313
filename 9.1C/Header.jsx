import React from "react";
import './Header.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from "./Login";
import SignUp from "./Signup";
import "./style.css"
import Banner from "./Banner";
import { auth } from './Firebase';
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Header = (props) => {
    let navigate = useNavigate();
    const currentUser = useContext(UserContext)

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log("user sign out")
                alert("Logout Successful.")
                navigate("/Logout");
            })
            .catch(error => {
                console.log(error.message)
            });
    };

    return (
        <div>
            <div className="header-div">
                <p><a href="/">DEV@Deakin</a></p>
                <form>
                    <input className="form-control-header" placeholder="Search"></input>
                </form>
                <br />
                <nav>
                    <Link to="/Login">Login</Link>
                    <Link to="/SignUp">SignUp</Link>
                    {currentUser &&
                        <button
                            className='button' onClick={logout}>Log Out</button>}
                </nav>
            </div>
            <Banner></Banner>
            <div>
                <Routes>
                    <Route path="/" />
                    <Route className="LoginForm" path="/Login" element={<Login />} />
                    <Route className="Form" path="/SignUp" element={<SignUp />} />
                    <Route path="/Logout" element={<Login />} />
                </Routes>
            </div>
        </div>
    )
}
export default Header;