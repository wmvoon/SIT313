import * as React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import PostPage from './PostPage';

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #F1FBFE; }'}</style>
      </Helmet>
      <Router>
        <nav className='navbarStyle'>
          <Link className='navbarTextStyle' to="/Post">Post</Link>
          <Link className='navbarTextStyle' to="/Search">Find Question</Link>
        </nav>
        <Routes>
          <Route path="/Post" element={<PostPage />}/>
          <Route path="/Search" element={<SearchPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
