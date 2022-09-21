import React from "react";
import { useState } from "react";
import { db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";
import './App.css';

const Question = () => {
    function refresh() {
        window.location.reload(true);
    }

    function validateFrom() {
        var title = document.getElementById("title").value
        var description = document.getElementById("description").value
        var tags = document.getElementById("tags").value

        if (title === "") {
            alert("Please enter title.")
            return false;
        }
        else if (description === "") {
            alert("Please enter description.")
            return false;
        }
        else if (tags === "") {
            alert("Please enter tags.")
            return false;
        }
        else if (title !== "" && description !== "" && tags !== "") {
            return true;
        }
    }

    const [content, setContent] = useState({
        title: '',
        description: '',
        tags: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        //console.log(name, value);
        setContent((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleUpload = async (content) => {
        if (validateFrom() === true) {
            const ArticleCollRef = collection(db, 'Questions')
            addDoc(ArticleCollRef, {
                Title: content.title,
                Description: content.description,
                Tags: content.tags,
                DateTime: new Date().toLocaleString() + ""
            }).then(Response => {
                console.log(Response)
                alert("Question Posted Successfully!")
                refresh()
            }).catch(error => {
                console.log(error.message)
            })
        }
        else {
            return;
        }
    }
    return (
        <div>
            <h1>What do you want to ask or share</h1>
            <p>Please fill out the following to post a question.</p>
            <label>Title</label>
            <form>
                <input className='input-text' name="title" id="title" onChange={handleChange} placeholder="Start your question with how, what, why, etc."></input>
            </form>
            <label>Desribe your problem</label>
            <br />
            <form>
                <textarea className='textarea-text' name="description" id="description" onChange={handleChange} placeholder="Enter description of your problem" cols="40" rows="15"></textarea>
            </form>
            <label>Tags</label>
            <form>
                <input className='input-text' name="tags" id="tags" onChange={handleChange} placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"></input>
            </form>
            <button onClick={() => handleUpload(content)}>Post</button>
        </div>
    )
}

export default Question;
