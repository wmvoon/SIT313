import React from "react";
import { useState } from "react";
import { db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";
import './App.css';
import ReactMarkdown from 'react-markdown';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';


const Question = () => {
    function refresh() {
        window.location.reload(true);
    }

    // function validateFrom() {
    //     var title = document.getElementById("title").value
    //     var description = document.getElementById("description").value
    //     var tags = document.getElementById("tags").value

    //     if (title === "") {
    //         alert("Please enter title.")
    //         return false;
    //     }
    //     else if (description === "") {
    //         alert("Please enter description.")
    //         return false;
    //     }
    //     else if (tags === "") {
    //         alert("Please enter tags.")
    //         return false;
    //     }
    //     else if (title !== "" && description !== "" && tags !== "") {
    //         return true;
    //     }
    // }

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
        //if (validateFrom() === true) {
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
        // }
        // else {
        //     return;
        // }
    }
    
    // eslint-disable-next-line
    const onChange = React.useCallback((value, viewUpdate) => {
        //console.log('value:', content.description);
        return (content.description = value)
    });

    return (
        <div>
            <ReactMarkdown>### *What do you want to ask or share*</ReactMarkdown>
            <ReactMarkdown>#### Please fill out the following to post a question.</ReactMarkdown>
            <ReactMarkdown className="question-label">_Title_</ReactMarkdown>
            <form>
                <input className='input-text' name="title" id="title" onChange={handleChange} placeholder="Start your question with how, what, why, etc."></input>
            </form>
            <ReactMarkdown className="question-label">`Desribe your problem`</ReactMarkdown>
            <br />
            <div>
            <CodeMirror
                    className="code-mirror-control"
                    value=''
                    height="200px"
                    extensions={[javascript({ jsx: true })]}
                    onChange={onChange}
                />
            </div>
            <ReactMarkdown className="question-label">_Tags_</ReactMarkdown>
            <form>
                <input className='input-text' name="tags" id="tags" onChange={handleChange} placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"></input>
            </form>
            <button className='button' onClick={() => handleUpload(content)}>Post</button>
        </div>
    )
}

export default Question;
