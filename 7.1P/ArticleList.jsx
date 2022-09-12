import React from "react";
import Article from "./Article";
import ArticleContent from "./ArticleContent";

const style = {
    display: "flex",
    margin: "auto"
}

function articleComponent(article) {
    return (
        <Article
            title={article.title}
            avatar={article.avatar}
            description={article.description}
            name={article.name}>
        </Article>
    )
}

const ArticleList = () => {
    return (
        <div>
            <div>
                <h1>Feautured Article</h1>
            </div>
            <div style={style}>
                {ArticleContent.map(articleComponent)}
            </div>
            <button className='button'>See all Articles</button>
        </div>
    )
}

export default ArticleList;