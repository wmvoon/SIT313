import React from "react";
import './App.css';

const Article = () => {
    return (
        <div>
            <h1>What do you want to ask or share</h1>
            <p>Please fill out the following to post an article.</p>
            <label>Title</label>
            <form>
                <input className='input-text' placeholder="Enter a descriptive title"></input>
            </form>
            <label>Abstract</label>
            <br/>
            <form>
                <textarea className='textarea-text' placeholder="Enter a 1-paragraph abstract" cols="40" rows="12"></textarea>
            </form>
            <label>Article Text</label>
            <br/>
            <form>
                <textarea className='textarea-text' placeholder="Enter a 1-paragraph content for your article" cols="40" rows="12"></textarea>
            </form>
            <label>Tags</label>
            <form>
                <input className='input-text' placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"></input>
            </form>
            <button>Post</button>
        </div>
    )
}

export default Article;
