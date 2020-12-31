
import '../assets/css/css-reset.css';
import '../assets/scss/style.css';
import '../assets/fonts/font-awesome/css/all.min.css';

import model1 from '../assets/img/model-1.png';
import model2 from '../assets/img/model-2.png';
import model3 from '../assets/img/model-3.png';
import model4 from '../assets/img/model-4.png';

function MainHome(){
    return (
      <section className="main-home">
        <div className="content">
          <div className="left">
            <div className="image">
                <img src={model1} alt=""></img>
            </div>
          </div>
          <div className="right">
            <div className="text">
                <h5>Fashion Style 2020</h5>
                <h1><span>Sale 30% </span>Off Everything</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <button className="btn-explore">Explore Now</button>
            </div>
            <div className="slider">
                <div className="circle circle-left">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </div>
                <div className="images">
                    <div className="img img1">
                        <img src={model1} alt=""></img>
                    </div>
                    <div className="img img2">
                        <img src={model2} alt=""></img>
                    </div>
                    <div className="img img3">
                        <img src={model3} alt=""></img>
                    </div>
                    <div className="img img4">
                        <img src={model4} alt=""></img>
                    </div>
                </div>
                <div className="circle circle-right">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


  export default MainHome;