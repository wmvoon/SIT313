import React from 'react';
import './App.css';
import ArticleList from './ArticleList';
import TutorialList from './TutorialList';
import SubsribeEmail from './Subsribe';
import Footer from './Footer';
import { logout } from './Firebase';


const Content = () => {
  return (
    <div className="App">
      <div className='center'>
        <ArticleList></ArticleList>
      </div>

      <div className='center'>
        <TutorialList></TutorialList>
      </div>
      <button className='button' onClick={logout}>Log Out</button>
      <SubsribeEmail></SubsribeEmail>
      <Footer></Footer>

    </div>
  );
}

export default Content;
