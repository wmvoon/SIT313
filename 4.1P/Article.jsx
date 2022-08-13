import React from "react";
import "./ArticleStyle.css";


const Article = (props) => {
    return (
            <div className="article-div">
                <img src={props.avatar} alt="ArticleImg"></img>
                <h1>{props.title}</h1>
                <p>Description: {props.description}</p>
                <h3>Author: {props.name}</h3>
        </div>)
}

export default Article;