import React from "react";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51Lp8kMD8MIv7UwGYDekUIy9hWPxtedRYhpJbhp417u0lCmtFhxjkDUUUngnOnq9mrSkJ57UZulx6SiYc90B6jZH500mT6nBLii"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <div>
                <h3>You are purchasing DEV@Deakin premium plan. $2.99/month</h3>
            </div>
            <PaymentForm />
        </Elements>
    )
}