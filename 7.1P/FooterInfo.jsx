import React from "react"
import "./FooterStyle.css"

const inline = {
    display: "inline",
    margin: "0",
    padding: "0"
}

const FooterInfo = () => {
    return (
        <div className="footer">
            <ul className="ul-div">
                <li><h1 href="#explore">Explore</h1></li>
                <li className="li-div"><a href="#home">Home</a></li>
                <li className="li-div"><a href="#questions">Questions</a></li>
                <li className="li-div"><a href="#article">Articles</a></li>
                <li className="li-div"><a href="#tutorials">Tutorials</a></li>
            </ul>
            <ul className="ul-div">
                <li><h1 href="#support">Support</h1></li>
                <li className="li-div"><a href="#faqs">FAQs</a></li>
                <li className="li-div"><a href="#help">Help</a></li>
                <li className="li-div"><a href="#contact">Contact Us</a></li>
            </ul>
            <ul className="ul-div">
                <li><h1 href="#stayconnect">Stay Connected</h1></li>
                <li style={inline}><img src="https://icons-for-free.com/download-icon-facebook+high+quality+media+social+social+media+square+icon-1320192615308993674_512.png" alt="fb" href="#fb" width={50} height={50} /></li>
                <li style={inline}><img src="https://www.prestonmarket.com.au/wp-content/uploads/2020/07/social-instagram-new-square1-512.png" alt="insta" href="#ins" width={50} height={50} /></li>
                <li style={inline}><img src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png" alt="twitter" href="#twiter" width={50} height={50} /></li>
            </ul>
        </div>
    )
}

export default FooterInfo;