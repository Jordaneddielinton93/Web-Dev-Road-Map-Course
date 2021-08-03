import signPost from "../../Images/signPost.png"
import ButtonTakeStep from "../ButtonTakeStep/ButtonTakeStep";
import Slider from "../Slider/Slider"
import "./LandingPage.scss"



import html from "../../Images/Html.jpg"
const LandingPage = () => {
  return ( 
    <main className="LandingP">

      <section className="LandingP__Hero">
        <div className="LandingP__Hero__RoadMap">
          <h2 className="LandingP__Hero__RoadMap-title">Web Dev Road Map</h2>
          <p className="LandingP__Hero__RoadMap-title2">Welcome To Your Path</p>
          <div className="LandingP__Hero__RoadMap__cont">
            <ButtonTakeStep />
            <img srcSet={signPost} alt="direction post"  />

          </div>
        </div>



      </section>
      <section className="LandingP__Slider">
        <Slider title="HTML" img1={html}/>
        <Slider title="Css" img1={html}/>
        <Slider title="React" img1={html}/>
        <Slider title="FireBase" img1={html}/>
      </section>

    </main>
   );
}
 
export default LandingPage;