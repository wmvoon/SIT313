import React, { useState } from "react";
import "./SubsribeStyle.css"

const SubsribeEmail = () => {
    const[email, setEmail] = useState({
        email: ''
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        //console.log(name, value);
        setEmail((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
 
    const handleClick = async() => {
        await fetch('http://localhost:8080/', {
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({
                email: email.email
            })
        })
        .then (
            res => res.json())
        .then (
            data => JSON.parse(data))
            .catch(error => {
                console.log(error)``
            })
    }

    return (
    <div className="SubEmail-div">
    <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
    <form>
        <input className="form-control" placeholder="Enter your email" name="email" onChange={handleChange} value={email.email}></input>
    </form> 
    <button className="button" onClick={handleClick}>Subsribe</button>
    </div>)
}
export default SubsribeEmail;
