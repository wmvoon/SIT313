import React from "react";
import "./App.css";
import useCollapse from "react-collapsed";
import { db } from './Firebase'
import { doc, deleteDoc } from "firebase/firestore";


function refresh() {
        window.location.reload(true);
}

function deleteQuestion(id) {
        const docRef = doc(db, 'Questions', id)
        if (window.confirm('Are you sure you wish to delete this question?')) {
        deleteDoc(docRef)
            .then(() => {
                console.log('Document ' + id + ' deleted')
                alert('Document Deleted')
                refresh()
             })
             .catch(error => {
                console.log(error.message)
        })}
        else { 
                return; 
        }
}

const DBQuestion = (props) => {
        const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
        return (
                <div className="showQuestion-div">
                        <div className="collapsible-header" {...getToggleProps()}>
                                {isExpanded ? 
                                <div>
                                <button className="btn-delete" 
                                onClick={() => deleteQuestion(props.id)}>Delete</button>
                                <h2>{props.title}</h2>
                                </div>
                                        :
                                        <div>
                                <div className="tag-div">
                                        <p 
                                        style={{marginTop:"2px", 
                                        marginBottom:"2px", 
                                        fontSize:"15px"}}
                                        >{props.tags}</p>
                                </div>
                                <h2>{props.title}</h2></div>
                                }
                        </div>
                        <div {...getCollapseProps()}>
                                <div className="content">
                                        <p>Description: {props.description}</p>
                                        <p>Tags: {props.tags}</p>
                                        <p>Date: {props.datetime}</p>
                                </div>
                        </div>
                </div>
        )
}

export default DBQuestion;