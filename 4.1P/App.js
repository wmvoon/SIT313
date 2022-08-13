import './App.css';
import Header from './Header.jsx'
import Banner from './Banner.jsx'
import ArticleList from './ArticleList';
import TutorialList from './TutorialList';
import SubsribeEmail from './Subsribe';
import FooterInfo from './FooterInfo';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <h1>Feautured Article</h1>
      <div className='center'>
      <ArticleList></ArticleList>
      </div>
      <button className='button'>See all Articles</button>

      <h1>Feautured Tutorials</h1>
      <div className='center'>
        <TutorialList></TutorialList>
      </div>
      <button className='button'>See all Tutorials</button>

      <SubsribeEmail></SubsribeEmail>
      <FooterInfo></FooterInfo>
      <Footer></Footer>

    </div>
  );
}

export default App;
