
import FirstPage from "./first-page/first-page";
import SecondPage from "./second-page/second-page";
import './App.css';
import Modal from "./first-page/Modal";
import Video from "./Smart maktabiga xo’sh kelibsiz.mp4"
import Carousel from '../src/carousel/carousel'
import MainSection from "./Mainection/mainSection";
import Section2 from "./Section2/Section2";
import Footer1 from "../src/Footer/Footer"



function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <FirstPage/>
      </div>
        <div style={{marginTop:150}}>
            <div className="col-8 d-flex text-white text">
                <video className="video1 col-12" src={Video} autoPlay loop muted />
                <Carousel/>
            </div></div>
      <div>
          <SecondPage/>
          <Modal/>
      </div>
        <div className={'MainSection'}>

         <MainSection/>
        </div>
              <Section2/>



    </div>
  );
}

export default App;
