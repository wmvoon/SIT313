import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Login from "./Login";
import SignUp from "./Signup";
import PostPage from "./PostPage";
import SearchPage from "./SearchPage";
import PlansPage from "./PlansPage";
import "./style.css"
import Banner from "./Banner";
import { auth } from './Firebase';
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Content from "./Content";
import StripeContainer from "./StripeContainer";

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
                <p><a href="/Home">DEV@Deakin</a></p>
                {/* <form>
                    <input className="form-control-header" placeholder="Search" disabled></input>
                </form> */}
                <br />
                <nav>
                    <Link className='navbarTextStyle' style={{visibility: currentUser? 'hidden' : 'visible'}} to="/Login">Login</Link>
                    <Link className='navbarTextStyle' style={{visibility: currentUser? 'hidden' : 'visible'}} to="/SignUp">SignUp</Link>
                    <Link className='navbarTextStyle' style={{visibility: currentUser? 'visible' : 'hidden'}} to="/Home">Home</Link>
                    <Link className='navbarTextStyle' to="/Plans">Premium Plan</Link>
                    <Link className='navbarTextStyle' style={{visibility: currentUser? 'visible' : 'hidden'}} to="/Post">Post</Link>
                    <Link className='navbarTextStyle' style={{visibility: currentUser? 'visible' : 'hidden'}} to="/Search">Find Question</Link>
                    <Link className='navbarTextStyle' style={{visibility: currentUser? 'visible' : 'hidden'}} to="/Logout" onClick={logout}>Log Out</Link>
                </nav>
            </div>
            <Banner></Banner>
            <div>
                <Routes>
                    <Route path="/" />
                    <Route path="/Home" element={<Content />}/>
                    <Route className="LoginForm" path="/Login" element={<Login />} />
                    <Route className="Form" path="/SignUp" element={<SignUp />} />
                    <Route path="/Plans" element={<PlansPage />}/>
                    <Route path="/Post" element={<PostPage />}/>
                    <Route path="/Search" element={<SearchPage />} />
                    <Route path="/Logout" element={<Login />} />
                    <Route path="/PaymentForm" element={<StripeContainer />}/>
                </Routes>
            </div>
        </div>
    )
}
export default Header;