import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";
import "./style.css"

function SignUp() {
    let navigate = useNavigate();

    const [contact, setContact] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        c_password: ''
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

    // async function handleLogin(event) {
    //     event.preventDefault();
    //     await submitForm(event.target);
    //     navigate("/", {replace: true});
    // }

    const handleSignUp = async (contact) => {
        // event.preventDefault();
        console.log(contact);
        if (contact.password !== contact.c_password) {
            alert("Password is not the same")
            document.getElementById("password").value = "";
            document.getElementById("c_password").value = "";
            contact.password = "";
            contact.c_password = "";
            return;
        }
        await createUserWithEmailAndPassword(auth, contact.email, contact.password)
            .then((user) => {
                console.log(user)
                onAuthStateChanged(auth, (user) => {
                    const uid = user.uid;
                    const UserCollRef = collection(db, 'Users')
                    addDoc(UserCollRef, {
                        Email: contact.email,
                        FirstName: contact.first_name,
                        LastName: contact.last_name,
                        Password: contact.password
                        //UID: uid
                    }).then(Response => {
                        console.log(Response)
                    }).catch(error => {
                        console.log(error.message)
                    })
                })
                navigate("/Login");
            })
            .catch(error => {
                console.log(error);
                //alert("Error: ", error.message);
                switch (error.code) {
                    case 'auth/invalid-email':
                        alert('Invalid Email')
                        break;
                    case 'auth/weak-password':
                        alert('Password should be at least 6 characters')
                        break;
                    case 'auth/internal-error':
                        alert('An internal error has occured. Contact Admin')
                        break;
                    default:
                        break;
                }
            });
    }

    return (
        <div className="Form">
            <h1>Sign Up</h1>
            <div className="center">
                <table>
                    <tr>
                        <td>
                            First Name
                        </td>
                        <td>
                            <input className="form-control" placeholder="Enter your name" onChange={handleChange} name="first_name" value={contact.first_name} required={true}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Name
                        </td>
                        <td>
                            <input className="form-control" placeholder="Enter your name" onChange={handleChange} name="last_name" value={contact.last_name} required={true}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email
                        </td>
                        <td>
                            <input type="email" className="form-control" placeholder="Enter your email" onChange={handleChange} name="email" value={contact.email} required></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Password
                        </td>
                        <td>
                            <input type="password" id="password" className="form-control" placeholder="Enter your password" onChange={handleChange} name="password" value={contact.password} required></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Confrim Password
                        </td>
                        <td>
                            <input type="password" id="c_password" className="form-control" placeholder="Enter your password" onChange={handleChange} name="c_password" value={contact.c_password} required></input>
                        </td>
                    </tr>
                </table>
            </div>
            <br />
            <button onClick={() => handleSignUp(contact)} className="button">Sign Up</button>
        </div>
    )
}
export default SignUp;