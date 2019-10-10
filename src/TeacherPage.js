import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import './IntroPage.css';

class TeacherPage extends React.Component {
  constructor(props) {
     super(props);   
     this.toMainPage = this.toMainPage.bind(this);
  }

  toMainPage(){
    ReactDOM.render(<MainPage />, document.getElementById('root'));
  }

  render() {
     return (
         <div className="TeacherPage">
            <button onClick={this.toMainPage}>Go Back</button>
           
         </div>
     );
  }
}

export default TeacherPage;
