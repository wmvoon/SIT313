const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");
const cors = require("cors");

require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.API_KEY);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cors())
app.use(bodyParser.json())

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// })
let sendMail = async (message) => {
    try {
        await sgMail.send(message);
        let alert = require("alert");
        alert("Email Sent! Thank you!");
        console.log("Message sent successfully");
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
}
app.post('/', (req, res) => {
    const email = req.body.email
    //console.log(email);

    sendMail({
        to: email,
        from: "wm.voon@gmail.com",
        subject: "Welcome!",
        html: "<h1 style='text-align:center';>Welcome to SIT313</h1><hr style='text-align:center';>"
        + "<h2 style='text-align:center';>Thanks for subsribing to our Newsletter.<br/>Warmest Welcome from DEV@Deakin</h2>"
        + "<p style='text-align:center';>This is an auto-generated email, please do not reply.</p>"
    })

})

app.listen(8080, function () {
    console.log("Server is running on port 8080")
})
