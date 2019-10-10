import React from 'react';
import header from './images/header.png';
import startButton from './images/startButton.png';
import ReactDOM from 'react-dom';
import MainPage from './src/MainPage';
import test from './images/gif3.gif';
import './App.css';

class App extends React.Component {
  constructor(props) {
     super(props);
     this.handleClick = this.handleClick.bind(this);
     this.renderMainPage = this.renderMainPage.bind(this);
     this.state = {
        clicked: false,        
     }
  }
  
  renderMainPage() {
    ReactDOM.render(<MainPage />, document.getElementById('root'));
  }

  handleClick() {
    setTimeout(this.renderMainPage, 7000) 
    this.setState(state => ({
      clicked: true,
    }));
  }

  render() {
     return (
      <div className="landing_page">
        <img src={header} className="header" alt="header" />
        {this.state.clicked ?
          <img src={test} id="startButtonGif" className="startButtonGif" alt="gif"/>
          :
          <img src={startButton} className="startButton" alt="startButton" onClick={this.handleClick}/>
        }
      </div>
     )
  }
}

export default App;
