import React from "react";
import './Header.css';

const Header = (props) => {
    return (
        <div className="header-div">
            <p>DEV@Deakin</p>
            <form>
                <input className="form-control-header" placeholder="Search" ></input>
            </form>
            <ul>
                <li className="li-header">
                    <a className="a-post" href="#POST">Post</a>
                </li>
                <li className="li-header">
                    <a className="a-login" href="#LOGIN">Login</a>
                </li>
            </ul>
        </div>
    )
}
export default Header;