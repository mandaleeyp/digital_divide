import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Teacher from './TeacherPage';
import IntroPage from './IntroPage';
import './MainPage.css';

class MainPage extends React.Component {
  constructor(props) {
     super(props);   
     this.toLandingPage = this.toLandingPage.bind(this);
     this.toIntroduction = this.toIntroduction.bind(this);
     this.toTeacher = this.toTeacher.bind(this);
  }

  toLandingPage(){
    ReactDOM.render(<App />, document.getElementById('root'));
  }

  toTeacher(){
    ReactDOM.render(<Teacher />, document.getElementById('root'));
  }

  toIntroduction(){
    ReactDOM.render(<IntroPage />, document.getElementById('root'));
  }

  render() {
     return (
         <div className="MainPage">
            <button onClick={this.toLandingPage}>Go Back</button>
            <button className="introduction" onClick={this.toIntroduction}>What is Digital Divide?</button>
            <button className="introduction" onClick={this.toTeacher}>Digital Divide & Teachers</button>
            <button className="introduction" >Digital Divide & Students</button>
            <button className="introduction" >Digital Divide & Disability</button>
         </div>
     );
  }
}

export default MainPage;
