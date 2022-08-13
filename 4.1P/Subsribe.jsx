import React from "react";
import "./SubsribeStyle.css"

const SubsribeEmail = () => {
    return (
    <div className="SubEmail-div">
    <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
    <form>
        <input className="form-control" placeholder="Enter your email"></input>
    </form> 
    <button className="button">Subsribe</button>
    </div>)
}
export default SubsribeEmail;