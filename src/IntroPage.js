import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import Carousel from 'nuka-carousel';
import Slide1 from './images/slide1.png';
import Slide2 from './images/slide2.png';
import Slide3 from './images/slide3.png';
import Slide4 from './images/slide4.png';
import Slide5 from './images/slide5.png';
import Slide6 from './images/slide6.png';
import Slide7 from './images/slide7.png';
import Slide8 from './images/slide8.png';
import Slide9 from './images/slide9.png';
import Slide10 from './images/slide10.png';
import './IntroPage.css';

class IntroPage extends React.Component {
  constructor(props) {
     super(props);   
     this.toMainPage = this.toMainPage.bind(this);
  }

  toMainPage(){
    ReactDOM.render(<MainPage />, document.getElementById('root'));
  }


  render() {
     return (
         <div className="IntroPage">
            <button onClick={this.toMainPage}>Go Back</button>
            <Carousel height="700px">
                <img src={Slide1} height="80%" alt="slide1"/>
                <img src={Slide2} height="80%" alt="slide1"/>
                <img src={Slide3} height="80%" alt="slide1"/>
                <img src={Slide4} height="80%" alt="slide1"/>
                <img src={Slide5} height="80%" alt="slide1"/>
                <img src={Slide6} height="80%" alt="slide1"/>
                <img src={Slide7} height="80%" alt="slide1"/>
                <img src={Slide8} height="80%" alt="slide1"/>
                <img src={Slide9} height="80%" alt="slide1"/>
                {/* <img src={Slide10} height="80%" alt="slide1"/> */}
            </Carousel>
         </div>
     );
  }
}

export default IntroPage;
