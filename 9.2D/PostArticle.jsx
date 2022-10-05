import React from "react";
import { useState } from "react";
import { storage } from "./Firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";
import './App.css';

const Article = () => {
    let UploadBtnClicked = false;
    let path = '';

    function refresh() {
        window.location.reload(true);
    }

    function validateFrom() {
        var title = document.getElementById("title").value
        var abstract = document.getElementById("abstract").value
        var article_text = document.getElementById("article_text").value
        var tags = document.getElementById("tags").value

        if (title === "") {
            alert("Please enter title.")
            return false;
        }
        else if (abstract === "") {
            alert("Please enter abstract.")
            return false;
        } 
        else if (article_text === "") {
            alert("Please enter your article content.")
            return false;
        } 
        else if (tags === "") {
            alert("Please enter tags.")
            return false;
        }
        else if (title !== "" && abstract !== "" && article_text !== "" && tags !== "") {
            return true;
        }
    }

    const [content, setContent] = useState({
        title: '',
        imageURL: '',
        abstract: '',
        article_text: '',
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

    const [imageUpload, setImageUpload] = useState(null);
    const UploadImage = () => {
        if (imageUpload == null) {
            alert("No image uploaded. Please try again.")
            return;
        }
        path = `images/${imageUpload.name + v4()}`.toString();
        const imageRef = ref(storage, path);
        uploadBytes(imageRef, imageUpload)
            .then(() => {
                alert("Image Uploaded.")
                UploadBtnClicked = true
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const removeSelectedImage = () => {
        setImageUpload(null);
        document.getElementById("UploadedFile").value = "";
    };

    const handleUpload = async (content) => {
        if (UploadBtnClicked === false) {
            UploadImage();
        }

        if (validateFrom() === true) {
            const ArticleCollRef = collection(db, 'Articles')
            addDoc(ArticleCollRef, {
                Title: content.title,
                ImageURL: path,
                Abstract: content.abstract,
                ArticleText: content.article_text,
                Tags: content.tags,
                DateTime: Date().toString("DD-MM-YYYY")
            }).then(Response => {
                console.log(Response)
                alert("Article Posted Successfully!")
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
            <p>Please fill out the following to post an article.</p>
            <label className='article-label'>Title</label>
            <form>
                <input className='input-text' name="title" id="title" onChange={handleChange} placeholder="Enter a descriptive title"></input>
            </form>
            <table width="90%" style={{margin: 'auto'}}>
                <tr>
                    <td>
                        <label className='article-label'>Upload Image:</label>
                    </td>
                    <td>
                        <form>
                            <input
                                id="UploadedFile"
                                type="file"
                                onChange={(event) => { setImageUpload(event.target.files[0]) }}
                                style={{ fontSize: "18px" }}
                            />
                        </form>
                    </td>
                    <td>
                        <button
                            style={{ padding: "5px 8px", fontSize: "16px", float: "right" }}
                            onClick={UploadImage}>Upload</button>
                    </td>
                </tr>
            </table>
            <br />
            {imageUpload && (
                <div className="preview">
                    <img
                        src={URL.createObjectURL(imageUpload)}
                        className='image'
                        alt="Thumb"
                    />
                    <button onClick={removeSelectedImage} className='delete'>
                        Remove This Image
                    </button>
                </div>
            )}
            <br />
            <label className='article-label'>Abstract</label>
            <br />
            <form>
                <textarea className='textarea-text' name="abstract" id="abstract" onChange={handleChange} placeholder="Enter a 1-paragraph abstract" cols="40" rows="12"></textarea>
            </form>
            <label className='article-label'>Article Text</label>
            <br />
            <form>
                <textarea className='textarea-text' name="article_text" id="article_text" onChange={handleChange} placeholder="Enter a 1-paragraph content for your article" cols="40" rows="12"></textarea>
                
            </form>
            <label className='article-label'>Tags</label>
            <form>
                <input className='input-text' name="tags" id="tags" onChange={handleChange} placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"></input>
            </form>
            <button className='button' onClick={() => handleUpload(content)}>Post</button>
        </div>
    )
}

export default Article;