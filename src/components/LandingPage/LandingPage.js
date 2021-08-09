import signPost from "../../Images/signPost.png"
import ButtonTakeStep from "../ButtonTakeStep/ButtonTakeStep";
import { ACTION } from "../UseReducer/UseReducer";
import Slider from "../Slider/Slider"
import greyback from "../../Images/greyback.png"

import "./LandingPage.scss"


const LandingPage = () => {
  return ( 
    <main className="LandingP">
      
      <section className="LandingP__Hero">
      
        <div className="LandingP__Hero--image">
          <div className="LandingP__Hero--image-img"></div>
        </div>

        <div className="LandingP__Hero__RoadMap">
          <h2 className="LandingP__Hero__RoadMap-title">Web Dev Star Map</h2>
          <p className="LandingP__Hero__RoadMap-title2">Welcome To Your Path</p>
          <div className="LandingP__Hero__RoadMap__cont">
            <ButtonTakeStep />
            <img srcSet={signPost} alt="direction post"  />

          </div>
        </div>



      </section>

      <section className="LandingP__Intro">
        <div className="LandingP__Intro__ImgCont">
          <img srcSet={greyback} alt="" />
        </div>
        <article className="LandingP__Intro__Paragraph">
          <h3>Help me build this world!</h3>
          <p>With time and dedication anything is possible, my plan is to help developers get their goal's quicker and more effectivly with all the resourse's and infomation gathered here <b>free</b> </p>
        </article>

      </section>

      

      <section className="LandingP__Slider">

        <Slider title="HTML" />
        <Slider title="Css" />
        <Slider title="React" />
        <Slider title="FireBase" />
      </section>

      

    </main>
   );
}
 
export default LandingPage;