import React from "react";
import './App.css';
import ArticleList from './ArticleList';
import TutorialList from './TutorialList';
import { useContext } from "react";
import { UserContext } from "./context/UserContext";


const Content = () => {
  const currentUser = useContext(UserContext)
  return (
    <div>
      {currentUser &&
        <div className="App">
          <div className='center'>
            <ArticleList></ArticleList>
          </div>

          <div className='center'>
            <TutorialList></TutorialList>
          </div>
        </div>}
    </div>);
}

export default Content;
