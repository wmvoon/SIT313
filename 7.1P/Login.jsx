import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import "./style.css"
import './Header.css';
import { FirebaseError } from "firebase/app";

function Login() {
    let navigate = useNavigate();

    const [contact, setContact] = useState({
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        //console.log(name, value);
        setContact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleLogin = async (contact) => {
        // event.preventDefault();
        console.log(contact);
        await signInWithEmailAndPassword(auth, contact.email, contact.password)
            .then((user) => {
                console.log(user)
                alert("Login Successful!")
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                //alert("Error: ", error.message);
                switch (error.code) {
                    case 'auth/wrong-password':
                        alert('Wrong Password')
                        break;
                    case 'auth/too-many-requests':
                        alert('You fail too many times, try again later')
                        break;
                    case 'auth/invalid-email':
                        alert('Invalid Email')
                        break;
                    case 'auth/internal-error':
                        alert('An internal error has occured. Contact Admin')
                        break;
                    case 'auth/user-not-found':
                        alert('User not found.')
                        break;
                    default:
                        break;
                }
            });
    }

    return (
        <div className="Form">
            <h1>Login</h1>
            <div className="center">
                <table>
                    <tr>
                        <td>
                            Email:
                        </td>
                        <td>
                            <input className="form-control" placeholder="Enter your email" onChange={handleChange} name="email" value={contact.email}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Password:
                        </td>
                        <td>
                            <input type="password" className="form-control" placeholder="Enter your password" onChange={handleChange} name="password" value={contact.password}></input>
                        </td>
                    </tr>
                </table>
            </div>
            <br />
            <button onClick={() => handleLogin(contact)} className="button">Login</button>
        </div>
    )
}
export default Login;