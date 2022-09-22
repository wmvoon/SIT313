import React from "react"
import FooterInfo from "./FooterInfo"
import "./FooterStyle.css"
import "./style.css"

const style = {
    backgroundColor: "#dddddd",
    paddingBottom: "25px"
}

const Footer = () => {
    return (
        <div>
            <FooterInfo></FooterInfo>
            <div style={style}>
                <h1 style={{ margin: "0" }}>DEV@Deakin 2022</h1>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms</a>
                <a href="#coc">Code of Conduct</a>
            </div>
        </div>
    )
}

export default Footer;