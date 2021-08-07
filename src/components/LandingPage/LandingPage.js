import signPost from "../../Images/signPost.png"
import ButtonTakeStep from "../ButtonTakeStep/ButtonTakeStep";

import { ACTION } from "../UseReducer/UseReducer";
import Slider from "../Slider/Slider"
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
      <section className="LandingP__Slider">

        <Slider 
        title="HTML" />

        <Slider title="Css" />
        <Slider title="React" />
        <Slider title="FireBase" />
      </section>

    </main>
   );
}
 
export default LandingPage;