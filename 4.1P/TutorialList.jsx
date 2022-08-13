import React from "react";
import Tutorial from "./Tutorial";
import TutorialContent from "./TutorialContent";

const style = {
    display: "flex",
    margin: "auto"
}

function tutorialComponent(tutorial) {
    return (
        <Tutorial 
        title={tutorial.title}
        avatar={tutorial.avatar}
        description={tutorial.description}
        name={tutorial.name}>
        </Tutorial>
    )
}

const TutorialList = () => {
    return (
        <div style={style}>
            {TutorialContent.map(tutorialComponent)}
        </div>
    )
}

export default TutorialList;