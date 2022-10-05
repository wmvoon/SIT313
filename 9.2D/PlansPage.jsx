import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const PlansPage = () => {
    let navigate = useNavigate();
    const currentUser = useContext(UserContext)

    const GotoPayment = () => {
        navigate("/PaymentForm");
    }

    const GotoLogin = () => {
        navigate("/Login");
    }

    return (
        <div>
            <div className="center">
                <h1>Get Premium</h1>
            </div>
            <table className="center">
                <tr>
                    <td>
                        <div className="plan-div">
                            <h3 className="plan-header">Free</h3>
                            <p style={{ color: 'green' }}>✔ Access to All Content</p>
                            <p style={{ color: 'green' }}>✔ Post Questions</p>
                            <p style={{ color: 'red' }}>✘ Customization Features</p>
                            <p style={{ color: 'red' }}>✘ Analytics Dashboard</p>
                            <p style={{ color: 'red' }}>✘ Admin Features</p>
                            <p style={{ width: '100%' }}>FREE</p>
                        </div>

                    </td>
                    <td>
                        <div className="plan-div">
                            <h3 className="plan-header">Premium</h3>
                            <p style={{ color: 'green' }}>✔ Access to All Content</p>
                            <p style={{ color: 'green' }}>✔ Post Questions</p>
                            <p style={{ color: 'green' }}>✔ Customization Features</p>
                            <p style={{ color: 'green' }}>✔ Analytics Dashboard</p>
                            <p style={{ color: 'green' }}>✔ Admin Features</p>
                            <p>$2.99/month</p>
                        </div>
                    </td>
                </tr>
            </table>

            {currentUser ?
                <button className="button" onClick={GotoPayment}>Click here for PREMIUM!</button>
                :
                <button className="button" onClick={GotoLogin}>Log in to purchase!</button>
            }
        </div>
    )

}

export default PlansPage;