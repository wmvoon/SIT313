import React from "react";
import { useEffect, useState } from 'react';
import { db } from './Firebase'
import { collection, getDocs } from "firebase/firestore";
import DBQuestion from "./DBQuestion";

// const style = {
//     display: "flex",
//     margin: "auto"
// }

const QuestionList= (props) => {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        getQuestions()
    }, [])

    useEffect(() => {
        console.log(questions)
    }, [questions])

    function getQuestions() {
        const questionCollectionRef = collection(db, 'Questions');
        getDocs(questionCollectionRef)
            .then(response => {
                //console.log(response.docs)
                const ques = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                }))
                setQuestions(ques)
            })
            .catch(error => console.log(error.message))
    }
    
    const filteredQuestion = questions.filter((question) => {
        var result = question.data.Title.toLowerCase().includes(props.searchQuestion.toLowerCase()) ||
        question.data.Tags.toLowerCase().includes(props.searchQuestion.toLowerCase()) || 
        question.data.DateTime.toLowerCase().includes(props.searchQuestion.toLowerCase())
        return result
    })
    
    return (
        <div className="questioncard-div">
            {filteredQuestion.map(question => 
            <DBQuestion key={question.id}
                id={question.id}
                title={question.data.Title}
                description={question.data.Description}
                tags={question.data.Tags}
                datetime={question.data.DateTime}
                ></DBQuestion>)}
        </div>
    )
}

export default QuestionList;