import React from "react";
import './App.css';

const Question = () => {
    return (
        <div>
            <h1>What do you want to ask or share</h1>
            <p>Please fill out the following to post a question.</p>
            <label>Title</label>
            <form>
                <input className='input-text' placeholder="Start your question with how, what, why, etc."></input>
            </form>
            <label>Desribe your problem</label>
            <br/>
            <form>
                <textarea className='textarea-text' placeholder="Enter description of your problem" cols="40" rows="15"></textarea>
            </form>
            <label>Tags</label>
            <form>
                <input className='input-text' placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"></input>
            </form>
            <button>Post</button>
        </div>
    )
}

export default Question;
