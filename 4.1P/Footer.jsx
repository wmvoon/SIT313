import React from "react"
import "./FooterStyle.css"

const style = {
    backgroundColor: "#dddddd",
    paddingBottom : "25px"
}

const Footer = () => {
    return (
        <div style={style}>
            <h1 style={{margin: "0"}}>DEV@Deakin 2022</h1>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms</a>
                <a href="#coc">Code of Conduct</a>
        </div>
    )
}

export default Footer;